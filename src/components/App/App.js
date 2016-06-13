import React, { PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import muiTheme from 'theme/muiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NestedStatus from 'react-nested-status';
import Helmet from 'react-helmet';
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
          <Helmet
            title="Chris Slater, ReactJS Developer"
            titleTemplate="%s - snapper.fish"
            defaultTitle="Chris Slater, ReactJS Developer"
            meta={[
              {
                name: 'description',
                content: `
                I’m Chris Slater. A Senior Web Developer specializing in
                ReactJS and other Javascript development in London.
                `,
              },
            ]}
          />
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
