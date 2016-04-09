import React, { Component, PropTypes } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import { isLoaded, load } from 'redux/modules/features';
import { asyncConnect } from 'redux-async-connect';
import {connect} from 'react-redux';

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];

    if (!isLoaded(getState())) {
      let contentTypes = getState().contentTypes;
      if(contentTypes && contentTypes.Image) {
        promises.push(dispatch(load(contentTypes.Image.id)));
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

  render() {
    console.log(this.props.features);
    const PHOTOS = [
      {
        src: '/gallery/evilspirit.png',
        width: 384,
        height: 384,
        aspectRatio: 1,
        lightboxImage: {
          src: '/gallery/evilspirit.png'
        }
      },
      {
        src: '/gallery/wonderer.png',
        width: 384,
        height: 384,
        aspectRatio: 1,
        lightboxImage: {
          src: '/gallery/wonderer.png'
        }
      }
    ];

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

  featuresMarkup() {
    return this.props.features.map((feature) => {
      const { id, image: {
        url,
        width,
        height,
        title,
        }} = feature;

      return (
        <a key={'feature_' + id}>
          <img src={url} width={width} height={height} alt={title} title={title}/>
        </a>
      );
    });
  }
}
