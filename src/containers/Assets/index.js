import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Assets from 'models/Assets';
import Asset from 'models/Asset';
import Image from 'models/Image';

import { load as loadFeatures } from 'redux/modules/features';

export default function assetsDecorator(ChildComponent) {
  @connect(
    state => ({
      _assets: state.assets
    })
  )
  class AssetsContainer extends Component {
    render() {
      const { _assets } = this.props;
      const assets = new Assets(_assets.map((props) => {
        return new Image(props);
      }));

      return (<ChildComponent {...this.props} assets={assets} />);
    }
  }

  return AssetsContainer;
};