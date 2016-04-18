import React, { Component, PropTypes } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import { asyncConnect } from 'redux-async-connect';
import {connect} from 'react-redux';

import {
  isLoaded as isContentTypesLoaded,
  load as loadContentTypes,
  mapContentTypes,
} from 'redux/modules/contentTypes';
import { isLoaded as isFeaturesLoaded, load as loadFeatures } from 'redux/modules/features';

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {

    let id;
    let contentTypesPromise;

    if (isContentTypesLoaded(getState())) {
      id = getState().contentTypes.Image.getId();
    } else {
      contentTypesPromise = dispatch(loadContentTypes());
    }

    const promiseFeatures = new Promise((resolve) => {
      if (isContentTypesLoaded(getState())) {
        dispatch(loadFeatures(id)).then(() => resolve());
      } else {
        contentTypesPromise.then(res => {

          const id = mapContentTypes(res.items).Image.getId();
          dispatch(loadFeatures(id)).then(() => resolve());
        });
      }
    });

    return Promise.all(contentTypesPromise, promiseFeatures);
  }
}])
@connect(
  state => ({
    assets: state.assets,
    features: state.features,
  })
)
export default class Home extends Component {

  static propTypes = {
    //features: PropTypes.,
  };

  static defaultProps = {
    features: null
  };

  featuresMarkup() {
    const {
      features,
      assets
    } = this.props;

    if (!features.items) {
      return;
    }

    return features.items.map((feature) => {
      if (feature.image) {
        const image = assets.getAssetById(feature.image.id);

        return (
          <a key={'feature_' + feature.id}>
            <img {...image.getFormattedDetails()}/>
          </a>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <Helmet title="Home"/>
        <div>
          <div className="container">
            <h1>{config.app.title}</h1>
            <h2>{config.app.description}</h2>
          </div>
        </div>
          {this.featuresMarkup()}
      </div>
    );
  }
}
