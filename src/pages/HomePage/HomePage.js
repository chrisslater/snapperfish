import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {
  Hero,
  // Menu,
  Profile,
  // Layout,
} from 'components';
import { asyncConnect } from 'redux-connect';
// import config from '../../config';
// <Menu depth={0} isFixed />

class HomePage extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home" />
        <Hero />
        <Profile />
      </div>
    );
  }
}

export default asyncConnect([])(HomePage);

