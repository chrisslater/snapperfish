import React, { Component, PropTypes } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Feature extends Component {
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
