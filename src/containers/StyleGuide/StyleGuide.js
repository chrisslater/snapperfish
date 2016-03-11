import React, {Component} from 'react';
import Helmet from 'react-helmet';

import {Button} from 'components';

export default class StyleGuide extends Component {
  render() {
    return (
      <div className="container">
        <h1>Style Guide</h1>
        <Helmet title="Style Guide"/>

        <Button />
      </div>
    );
  }
}
