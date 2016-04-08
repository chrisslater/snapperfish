import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';
import {connect} from 'react-redux';
import * as contentTypesActions from 'redux/modules/contentTypes';
import { isLoaded, load } from 'redux/modules/contentTypes';

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];
    if (!isLoaded(getState())) {
      promises.push(dispatch(load()));
    }

    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    contentTypes: state.contentTypes.types,
  }),
  {...contentTypesActions}
)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    lunch: PropTypes.object.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.scss');

    console.log(this.props);

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
                <div className={styles.brand}/>
                <span>{config.app.title}</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar>
              <LinkContainer to="/styleguide">
                <NavItem eventKey={2}>Style Guide</NavItem>
              </LinkContainer>
            </Nav>
            <Nav navbar pullRight>
              <NavItem eventKey={3} target="_blank" title="View on Github" href="https://github.com/chrisslater">
                <i className="fa fa-github"/>
              </NavItem>
              <NavItem eventKey={4} target="_blank" title="View my LinkedIn" href="https://uk.linkedin.com/in/crslater">
                <i className="fa fa-linkedin"/>
              </NavItem>
              <NavItem eventKey={5} target="_blank" title="View my Twitter" href="https://twitter.com/chrisontheside">
                <i className="fa fa-twitter"/>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
