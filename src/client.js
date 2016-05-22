/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { ReduxAsyncConnect } from 'redux-async-connect';
import { syncHistoryWithStore } from 'react-router-redux';

import { ApplyTheme } from 'rethemeable';
import theme from 'theme/theme';

import useScroll from 'scroll-behavior/lib/useStandardScroll';

import getRoutes from './routes';

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? `/${path}` : path;
  return `/api${adjustedPath}`;
}

const client = new ApiClient(null, formatUrl);
const dest = document.getElementById('content');
const store = createStore(client, window.__data);
const history = syncHistoryWithStore(useScroll(() => browserHistory)(), store);

const component = (
  <Router
    render={(props) =>
      <ReduxAsyncConnect {...props} helpers={{ client }} filter={item => !item.deferred} />
    } history={history}
  >
    {getRoutes(store)}
  </Router>
);

ReactDOM.render(
  <Provider store={store} key="provider">
    <ApplyTheme theme={theme}>
      {component}
    </ApplyTheme>
  </Provider>,
  dest
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (
    !dest ||
    !dest.firstChild ||
    !dest.firstChild.attributes ||
    !dest.firstChild.attributes['data-react-checksum']) {
    console.error(
      `Server-side React render was discarded.
      Make sure that your initial render does not contain any client-side code.`
    );
  }
}

if (__DEVTOOLS__ && !window.devToolsExtension) {
  const DevTools = require('./containers/DevTools/DevTools');
  ReactDOM.render(
    <Provider store={store} key="provider">
      <ApplyTheme theme={theme}>
        <div>
          {component}
          <DevTools />
        </div>
      </ApplyTheme>
    </Provider>,
    dest
  );
}
