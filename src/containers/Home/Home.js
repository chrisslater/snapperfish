import React, { Component, PropTypes } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import FeaturesContainer from 'containers/Features';
import AssetsContainer from 'containers/Assets';

import Features from 'models/Features';
import Assets from 'models/Assets';

import { Features as FeaturesList } from 'components';

@FeaturesContainer
@AssetsContainer
export default class Home extends Component {

  static propTypes = {
    features: PropTypes.instanceOf(Features),
    assets: PropTypes.instanceOf(Assets),
  };

  render() {
    const { features, assets } = this.props;
    features.attachAssets(assets);

    return (
      <div>
        <Helmet title="Home" />
        <div>
          <div className="container">
            <h1>{config.app.title}</h1>
            <h2>{config.app.description}</h2>
          </div>
        </div>
          <FeaturesList features={features} />
      </div>
    );
  }
}
