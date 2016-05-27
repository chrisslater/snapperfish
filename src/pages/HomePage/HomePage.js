import React from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import {
  Hero,
  Menu,
  Profile,
  Layout,
} from 'components';

import Themer from 'components/Themer';
import Test from 'components/Test';
import themeTwo from 'theme/theme-two';

console.log(themeTwo);

function HomePage() {
  return (
    <div>
      <Helmet title="Home" />
      <Menu depth={0} isFixed />
      <Hero>
        <Layout>
          <h1>{config.app.title}</h1>
          <h2>{config.app.description}</h2>
        </Layout>
      </Hero>

      <Themer scalesTheme={themeTwo}>
        <Test />
      </Themer>

      <Profile />
    </div>
  );
}

export default HomePage;

