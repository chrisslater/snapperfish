import React, { PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import Feature from 'models/Feature';
import { loadFeature } from 'redux/modules/features';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

function featureDecorator(ChildComponent) {
  function FeatureContainer(props) {
    const { _features, params: { slug } } = props;

    if (_features.length < 1) {
      return (<NotFoundPage />);
    }

    const matchedFeature = _features.find(feature => feature.slug === slug);
    return (<ChildComponent { ...props } feature={new Feature(matchedFeature)} />);
  }

  FeatureContainer.propTypes = {
    _features: PropTypes.array.isRequired,
    params: PropTypes.object.isRequired,
  };

  return asyncConnect([{
    promise: (props) => {
      const {
        store: {
          dispatch,
        },
        params: {
          slug,
        },
      } = props;
      return Promise.all([dispatch(loadFeature(slug))]);
    },
  }])(connect(
    state => ({ _features: state.features }),
  )(FeatureContainer));
}

export default featureDecorator;
