import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import Feature from 'models/Feature';
import { loadFeature } from 'redux/modules/features';

function featureDecorator(ChildComponent) {
  @asyncConnect([{
    promise: ({ store: { dispatch, getState } }) => {
      let slug = getState().routing.locationBeforeTransitions.pathname;

      if (slug[0] === '/') {
        slug = slug.substring(1);
      }

      return Promise.all([dispatch(loadFeature(slug))]);
    }
  }])
  @connect(
    state => {
      return {_features: state.features}
    }
  )
  class FeatureContainer extends Component {
    render() {
      const { _features, params: { slug } } = this.props;

      if (_features.length < 1) {
        return null;
      }

      const matchedFeature = _features.find(feature => {
        return feature.slug === slug;
      });


      return <ChildComponent {...this.props} feature={new Feature(matchedFeature)} />
    }
  }

  return FeatureContainer;
}

export default featureDecorator;