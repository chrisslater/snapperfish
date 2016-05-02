import React from 'react';
import {
  IndexRoute,
  Route,
} from 'react-router';
import { App } from 'components';
import {
  HomePage,
  FeaturePage,
  StyleGuidePage,
  NotFoundPage,
} from 'pages';

export default function () {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="styleguide" component={StyleGuidePage} />
      <Route path=":slug" component={FeaturePage} />
      <Route path="*" component={NotFoundPage} status={404} />
    </Route>
  );
}
