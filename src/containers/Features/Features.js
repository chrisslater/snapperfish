import React, { PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import Features from 'models/Features';
import Feature from 'models/Feature';
import { load as loadFeatures } from 'redux/modules/features';


function featuresDecorator(ChildComponent) {
  const FeaturesContainer = props => {
    const { _features } = props;
    const features = new Features(_features.map(featureProps => new Feature(featureProps)));
    return (<ChildComponent {...props} features={features} />);
  };

  FeaturesContainer.propTypes = {
    _features: PropTypes.array,
  };

  return asyncConnect([{
    promise: ({ store: { dispatch } }) => Promise.all([dispatch(loadFeatures())]),
  }])(connect(
    state => ({ _features: state.features })
  )(FeaturesContainer));
}

export default featuresDecorator;
