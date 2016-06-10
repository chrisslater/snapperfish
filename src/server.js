import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
// import config from './config';
import favicon from 'serve-favicon';
import compression from 'compression';
import path from 'path';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import Html from './helpers/Html';
import PrettyError from 'pretty-error';
// import http from 'http';

import { match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect';
import createHistory from 'react-router/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import getRoutes from './routes';
import NestedStatus from 'react-nested-status';

import { Themer } from 'components';
import theme from 'theme/theme';
// import env from './env';

const pretty = new PrettyError();
const app = new Express();

app.all('/api/*', (req, res, next) => {
  // eslint-disable-next-line no-param-reassign
  req.url = req.url.replace('/api', '/backend');
  next('route');
});

const _keystone = require('../keystone');
const keystone = _keystone(app);
const maxAge = 31557600000;

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));
app.use(Express.static(path.join(__dirname, '..', 'static'), { maxAge }));

// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
// proxy.on('error', (error, req, res) => {
//  if (error.code !== 'ECONNRESET') {
//    console.error('proxy error', error);
//  }
//  if (!res.headersSent) {
//    res.writeHead(500, { 'content-type': 'application/json' });
//  }
//
//  const json = { error: 'proxy_error', reason: error.message };
//  res.end(JSON.stringify(json));
// });

app.use(/^\/(?!keystone|backend).*/, (req, res) => {
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  } else {
    if (!res.getHeader('Cache-Control')) res.setHeader('Cache-Control', 'public, max-age=' + (maxAge/1000));
  }

  function formatUrl(fpath) {
    const apiPart = '/backend';
    const adjustedPath = fpath[0] !== '/' ? `/${fpath}` : fpath;
    return `${req.protocol}://${req.get('host')}${apiPart}${adjustedPath}`;
  }

  const client = new ApiClient(req, formatUrl);

  const memoryHistory = createHistory(req.originalUrl);
  const store = createStore(client);
  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(memoryHistory, store);

  function hydrateOnClient() {
    res.send(
      `<!DOCTYPE html>
      ${ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store} />)}`
    );
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  match({
    history,
    routes: getRoutes(store),
    location: req.originalUrl,
  }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      loadOnServer({ ...renderProps, store, helpers: { client } }).then(() => {
        const component = (
          <Provider store={store} key="provider">
            <Themer scalesTheme={theme}>
              <ReduxAsyncConnect { ...renderProps } />
            </Themer>
          </Provider>
        );

        global.navigator = { userAgent: req.headers['user-agent'] };

        const markup = (
          `<!DOCTYPE html>
          ${ReactDOM.renderToString(
            <Html assets={webpackIsomorphicTools.assets()} component={component} store={store} />
          )}`
        );
        const status = NestedStatus.rewind();
        res.status(status).send(markup);
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});

keystone.start();
