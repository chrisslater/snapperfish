import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import featuresContainer from 'containers/Features/Features';
import assetsContainer from 'containers/Assets/Assets';

import Features from 'models/Features';
import Assets from 'models/Assets';

import {
  Dimensions,
  FeaturesGrid,
  Menu,
  LayoutContainer,
} from 'components';

function HomePage(props) {
  const { features, assets } = props;
  features.attachAssets(assets);

  const title = 'Blog';

  return (
    <div>
      <Helmet title={title} />
      <Menu title={title} />
      <LayoutContainer>
        <Dimensions>
          <FeaturesGrid
            urlPrefix={'blog/'}
            features={features}
          />
        </Dimensions>
      </LayoutContainer>
    </div>
  );
}

HomePage.propTypes = {
  features: PropTypes.instanceOf(Features),
  assets: PropTypes.instanceOf(Assets),
};

export default featuresContainer(assetsContainer(HomePage));

