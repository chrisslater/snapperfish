import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class StyleGuide extends Component {
  render() {
    return (
      <div className="container">
        <h1>Style Guide</h1>
        <Helmet title="Style Guide"/>
      </div>
    );
  }
}
