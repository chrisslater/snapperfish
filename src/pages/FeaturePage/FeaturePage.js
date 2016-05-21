import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { featureContainer } from 'containers';
import Feature from 'models/Feature';

import {
  Feature as FeatureComponent,
  Menu,
} from 'components';

function FeaturePage(props) {
  const { feature } = props;
  const formatted = {};

  formatted.image = feature.getImage().getFormatted();
  formatted.title = feature.getTitle();
  formatted.body = feature.getBody();
  formatted.publishedDate = feature.getPublishedDate();

  return (
    <div>
      <Helmet title="Feature" />
      <Menu title={formatted.title} />
      <FeatureComponent {...formatted} />
    </div>
  );
}

FeaturePage.propTypes = {
  feature: PropTypes.instanceOf(Feature).isRequired,
};

export default featureContainer(FeaturePage);
