import React, { Component, PropTypes } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import FeatureContainer from 'containers/Feature/Feature';
import AssetsContainer from 'containers/Assets';

@FeatureContainer
@AssetsContainer
export default class FeaturePage extends Component {
  render() {
    const { feature, assets } = this.props;
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
}
