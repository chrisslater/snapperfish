import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { themeable } from 'rethemeable';
import muiTheme from 'theme/muiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NestedStatus from 'react-nested-status';
import { Footer } from 'components';
import themeInjector from 'containers/themeInjector';

/* @TODO Needed for onTouchTap, remove when forfilled
 * http://stackoverflow.com/a/34015469/988941
 */
injectTapEventPlugin();

//@themeInjector
class App extends Component {
  render() {
    const theme = this.props.theme || {};
    return (
      <NestedStatus code={200}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className={theme.container}>
            <div className={theme.content}>
              {this.props.children}
            </div>
            <Footer />
          </div>
        </MuiThemeProvider>
      </NestedStatus>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

App.contextTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
