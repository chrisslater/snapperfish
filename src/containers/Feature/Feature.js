import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import Feature from 'models/Feature';
import { load, loadFeature } from 'redux/modules/features';

function featureDecorator(ChildComponent) {
  @asyncConnect([{
    promise: ({ store: { dispatch, getState } }) => {
      console.log('Feature State', getState());
      const slug = getState().routing.locationBeforeTransitions.pathname.substring(1);
      Promise.all([dispatch(loadFeature(slug))]);
    }
  }])
  @connect(
    state => ({ _features: state.features })
  )
  class FeatureContainer extends Component {
    render() {
      const { _currentFeature } = this.props;
      const feature = new Feature(_currentFeature);
      return <ChildComponent {...this.props} feature={feature} />
    }
  }

  return FeatureContainer;
}

export default featureDecorator;