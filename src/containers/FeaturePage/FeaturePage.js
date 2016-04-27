import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import featureContainer from 'containers/Feature/Feature';
import assetsContainer from 'containers/Assets';

import Feature from 'models/Feature';
import Assets from 'models/Assets';

function FeaturePage(props) {
  const { feature, assets } = props;
  feature.attachAssets(assets);
  return (
    <div>
      <Helmet title="Feature" />
      <div>
        <h1>{feature.getTitle()}</h1>
      </div>
    </div>
  );
}

FeaturePage.propTypes = {
  feature: PropTypes.instanceOf(Feature).isRequired,
  assets: PropTypes.instanceOf(Assets).isRequired,
};

export default featureContainer(assetsContainer(FeaturePage));

