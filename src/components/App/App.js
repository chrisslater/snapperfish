import React, { PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import muiTheme from 'theme/muiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NestedStatus from 'react-nested-status';
import {
  ContentWrapper,
  Footer,
} from 'components';

/* @TODO Needed for onTouchTap, remove when forfilled
 * http://stackoverflow.com/a/34015469/988941
 */
injectTapEventPlugin();

function App(props) {
  return (
    <NestedStatus code={200}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <ContentWrapper>
            {props.children}
          </ContentWrapper>
          <Footer />
        </div>
      </MuiThemeProvider>
    </NestedStatus>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

App.contextTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
