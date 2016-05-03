import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import {
  featureContainer,
  assetsContainer,
} from 'containers';

import Feature from 'models/Feature';
import Assets from 'models/Assets';

import {
  Feature as FeatureComponent,
} from 'components';

function FeaturePage(props) {
  const { feature, assets } = props;
  feature.attachAssets(assets);
  const formatted = {};

  formatted.image = feature.getImage().getFormatted();
  formatted.title = feature.getTitle();
  formatted.body = feature.getBody();
  formatted.publishDate = feature.getPublishDate();

  return (
    <div>
      <Helmet title="Feature" />
      <FeatureComponent {...formatted} />
    </div>
  );
}

FeaturePage.propTypes = {
  feature: PropTypes.instanceOf(Feature).isRequired,
  assets: PropTypes.instanceOf(Assets).isRequired,
};

export default featureContainer(assetsContainer(FeaturePage));
