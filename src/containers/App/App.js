import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import Helmet from 'react-helmet';
import config from '../../config';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import NestedStatus from 'react-nested-status';

// @TODO Figure out why I need to have this in a component, rather than just Html.js
require('theme/global.scss');

/* @TODO Needed for onTouchTap, remove when forfilled
 * http://stackoverflow.com/a/34015469/988941
 */
injectTapEventPlugin();

class App extends Component {
  state = {
    open: false,
  };

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  render() {
    const styles = require('./App.scss');

    return (
      <NestedStatus code={200}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div>
            <Helmet {...config.app.head} />
            <AppBar
              title={'Home'}
              onLeftIconButtonTouchTap={this.handleOpen}
            />
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({ open })}
            >
              <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
                <span>{config.app.title}</span>
              </IndexLink>
              <MenuItem onTouchTap={this.handleClose}>
                <Link to={'/'}>Home</Link>
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose}>
                <Link to={'/styleguide'}>Style Guide</Link>
              </MenuItem>
            </Drawer>
            <div className={styles.appContent}>
              {this.props.children}
            </div>
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
