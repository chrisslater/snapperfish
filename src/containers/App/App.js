import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import config from '../../config';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

/* @TODO Needed for onTouchTap, remove when forfilled
 * http://stackoverflow.com/a/34015469/988941
 */
injectTapEventPlugin();

class App extends Component {

  state = {
    open: false
  };

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  render () {
    const styles = require('./App.scss');

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Helmet {...config.app.head} />
          <AppBar
            title="Title"
            onLeftIconButtonTouchTap={this.handleOpen}
          />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
              <div className={styles.brand}/>
              <span>{config.app.title}</span>
            </IndexLink>
            <MenuItem onTouchTap={this.handleClose}>
              <Link to={`/`}>Home</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
              <Link to={`/styleguide`}>Style Guide</Link>
            </MenuItem>
          </Drawer>
          <div className={styles.appContent}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
  //return (
  //  <MuiThemeProvider muiTheme={getMuiTheme()}>
  //    <div className={styles.app}>
  //      <Helmet {...config.app.head} />
  //      <AppBar
  //        title="Title"
  //      />
  //      <Navbar fixedTop>
  //        <Navbar.Header>
  //          <Navbar.Brand>
  //            <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
  //              <div className={styles.brand} />
  //              <span>{config.app.title}</span>
  //            </IndexLink>
  //          </Navbar.Brand>
  //          <Navbar.Toggle />
  //        </Navbar.Header>
  //        <Navbar.Collapse eventKey={0}>
  //          <Nav navbar>
  //            <LinkContainer to="/styleguide">
  //              <NavItem eventKey={2}>Style Guide</NavItem>
  //            </LinkContainer>
  //          </Nav>
  //          <Nav navbar pullRight>
  //            <NavItem eventKey={3} target="_blank" title="View on Github" href="https://github.com/chrisslater">
  //              <i className="fa fa-github" />
  //            </NavItem>
  //            <NavItem eventKey={4} target="_blank" title="View my LinkedIn" href="https://uk.linkedin.com/in/crslater">
  //              <i className="fa fa-linkedin" />
  //            </NavItem>
  //            <NavItem eventKey={5} target="_blank" title="View my Twitter" href="https://twitter.com/chrisontheside">
  //              <i className="fa fa-twitter" />
  //            </NavItem>
  //          </Nav>
  //        </Navbar.Collapse>
  //      </Navbar>
  //      <div className={styles.appContent}>
  //        {props.children}
  //      </div>
  //    </div>
  //  </MuiThemeProvider>
  //);
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

App.contextTypes = {
  store: PropTypes.object.isRequired
};

export default App;
