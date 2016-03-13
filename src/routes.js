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

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes */ }
      <Route path="styleguide" component={StyleGuide}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
