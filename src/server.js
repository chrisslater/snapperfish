import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import config from './config';
import favicon from 'serve-favicon';
import compression from 'compression';
import httpProxy from 'http-proxy';
import path from 'path';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import Html from './helpers/Html';
import PrettyError from 'pretty-error';
import http from 'http';

import { match } from 'react-router';
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';
import createHistory from 'react-router/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import getRoutes from './routes';

import env from './env';

// const targetUrl = 'http://' + config.apiHost + ':' + config.apiPort;
const targetUrl = `https://cdn.contentful.com/spaces/${env.CONTENTFUL_SPACE}`;
const pretty = new PrettyError();
const app = new Express();
const server = new http.Server(app);
const proxy = httpProxy.createProxyServer({
  target: targetUrl
});

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));
app.use(Express.static(path.join(__dirname, '..', 'static')));

function formatUrl(_path) {
  const adjustedPath = _path[0] !== '/' ? `/${_path}` : _path;
  return targetUrl + adjustedPath;
}

// Proxy to API server
app.use('/api', (req, res) => {
  const client = new ApiClient(req, formatUrl, {
    access_token: env.CONTENTFUL_ACCESS_TOKEN
  });

  client
    .get(req.path, { params: req.query })
    .then(body => res.send(body))
    .catch(body => res.send(body));
});

// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
proxy.on('error', (error, req, res) => {
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, { 'content-type': 'application/json' });
  }

  const json = { error: 'proxy_error', reason: error.message };
  res.end(JSON.stringify(json));
});

app.use((req, res) => {
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }
  const client = new ApiClient(req, formatUrl, {
    access_token: env.CONTENTFUL_ACCESS_TOKEN
  });
  const history = createHistory(req.originalUrl);

  const store = createStore(history, client);

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
    location: req.originalUrl
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
            <ReduxAsyncConnect { ...renderProps } />
          </Provider>
        );

        res.status(200);

        global.navigator = { userAgent: req.headers['user-agent'] };

        res.send(
          `<!DOCTYPE html>
          ${ReactDOM.renderToString(
            <Html assets={webpackIsomorphicTools.assets()} component={component} store={store} />
          )}`
        );
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});

if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info(
      '----\n==> ✅  %s is running, talking to API server on %s.', config.app.title, config.apiPort
    );
    console.info(
      '==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port
    );
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
