import React, { PropTypes } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import featuresContainer from 'containers/Features/Features';
import assetsContainer from 'containers/Assets/Assets';

import Features from 'models/Features';
import Assets from 'models/Assets';

import {
  Hero,
  Menu,
  Profile,
  Layout,
} from 'components';

function HomePage(props) {
  const { features, assets } = props;
  features.attachAssets(assets);
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
      <Profile />
    </div>
  );
}

HomePage.propTypes = {
  features: PropTypes.instanceOf(Features),
  assets: PropTypes.instanceOf(Assets),
};

export default featuresContainer(assetsContainer(HomePage));

