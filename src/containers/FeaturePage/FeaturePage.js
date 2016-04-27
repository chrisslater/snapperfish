import React, { Component, PropTypes } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import FeatureContainer from 'containers/Feature/Feature';

@FeatureContainer
export default class FeaturePage extends Component {
  render() {
    return (
      <div>
        <Helmet title="Feature" />
        <div>
          <h1>Feature!</h1>
        </div>
      </div>
    );
  }
}
