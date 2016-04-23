import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import {connect} from 'react-redux';
import Features from 'models/Features';
import Feature from 'models/Feature';
import { load as loadFeatures } from 'redux/modules/features';

export default function featuresDecorator(ChildComponent) {
  @asyncConnect([{
    promise: ({ store: { dispatch } }) => {
      return Promise.all([dispatch(loadFeatures())]);
    }
  }])
  @connect(
    state => ({
      _features: state.features,
    })
  )
  class FeaturesContainer extends Component {
    render() {
      const { _features } = this.props;

      const features = new Features(_features.map((props) => {
        return new Feature(props);
      }));

      return (<ChildComponent {...this.props} features={features} />);
    }
  }

  return FeaturesContainer;
};