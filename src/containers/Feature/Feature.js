import React, { PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import Feature from 'models/Feature';
import { loadFeature } from 'redux/modules/features';

function featureDecorator(ChildComponent) {
  function FeatureContainer(props) {
    const { _features, params: { slug } } = props;
    const matchedFeature = _features.find(feature => feature.slug === slug);
    return (<ChildComponent { ...this.props } feature={new Feature(matchedFeature)} />);
  }

  FeatureContainer.propTypes = {
    _features: PropTypes.array.isRequired,
    params: PropTypes.object.isRequired,
  };

  return asyncConnect([{
    promise: ({ store: { dispatch, getState } }) => {
      let slug = getState().routing.locationBeforeTransitions.pathname;

      if (slug[0] === '/') {
        slug = slug.substring(1);
      }

      return Promise.all([dispatch(loadFeature(slug))]);
    }
  }])(connect(
    state => ({ _features: state.features })
  )(FeatureContainer));
}

export default featureDecorator;
