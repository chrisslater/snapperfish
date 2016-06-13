import React from 'react';
import {
  Hero,
  // Menu,
  Profile,
  // Layout,
} from 'components';
import { asyncConnect } from 'redux-connect';
// import config from '../../config';
// <Menu depth={0} isFixed />

function HomePage() {
  return (
    <div>
      <Hero />
      <Profile />
    </div>
  );
}

export default asyncConnect([])(HomePage);
