import React, { PropTypes } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import featuresContainer from 'containers/Features';
import assetsContainer from 'containers/Assets';

import Features from 'models/Features';
import Assets from 'models/Assets';

import { FeaturesGrid } from 'components';

function Home(props) {
  const { features, assets } = props;
  features.attachAssets(assets);

  return (
    <div>
      <Helmet title="Home" />
      <div className="container">
        <h1>{config.app.title}</h1>
        <h2>{config.app.description}</h2>
      </div>
      <FeaturesGrid features={features} />
    </div>
  );
}

Home.propTypes = {
  features: PropTypes.instanceOf(Features),
  assets: PropTypes.instanceOf(Assets),
};

export default featuresContainer(assetsContainer(Home));

