import React from 'react';
import {
  IndexRoute,
  Route
} from 'react-router';
import {
  App,
  Home,
  StyleGuide,
  NotFound,
} from 'containers';

export default function () {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="styleguide" component={StyleGuide} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
}
