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
    const promises = [];

    if (!isFeaturesLoaded(getState())) {
      if (!isContentTypesLoaded(getState())) {
        const promiseContentTypes = dispatch(loadContentTypes());
        const promiseFeatures = new Promise((resolve) => {
          promiseContentTypes.then((res) => {
            const contentTypes = mapContentTypes(res.items);
            resolve(dispatch(loadFeatures(contentTypes.Image.id)));
          });
        });

        promises.push(promiseContentTypes);
        promises.push(promiseFeatures);
      }
    }

    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    features: state.features.items,
  })
)
export default class Home extends Component {

  static propTypes = {
    features: PropTypes.array,
  }

  static defaultProps = {
    features: []
  };

  featuresMarkup() {
    return this.props.features.map((feature) => {
      const {
        id,
        image: {
          url,
          width,
          height,
          title,
        }
      } = feature;

      return (
        <a key={'feature_' + id}>
          <img src={url} width={width} height={height} alt={title} title={title}/>
        </a>
      );
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
