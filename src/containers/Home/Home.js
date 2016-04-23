import React, { Component, PropTypes } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import FeaturesContainer from 'containers/Features';
import AssetsContainer from 'containers/Assets';
//import { asyncConnect } from 'redux-async-connect';
//import {connect} from 'react-redux';

//import { load as loadFeatures, Features } from 'redux/modules/features';
//import Assets from 'redux/modules/assets/models/Assets';

@FeaturesContainer
@AssetsContainer
export default class Home extends Component {
  featuresMarkup(features) {
    return features.getItems().map((feature) => {
      let mapped = null;
      let image = feature.getImage();

      if (image) {
        mapped = (
          <a key={'feature_' + feature.getId()}>
            <img {...image.getFormatted()}/>
          </a>
        );
      }

      return mapped;
    });
  }

  render() {
    const { features, assets } = this.props;
    features.attachAssets(assets);

    return (
      <div>
        <Helmet title="Home"/>
        <div>
          <div className="container">
            <h1>{config.app.title}</h1>
            <h2>{config.app.description}</h2>
          </div>
        </div>
          {this.featuresMarkup(features)}
      </div>
    );
  }
}
