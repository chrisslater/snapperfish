import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Assets from 'models/Assets';
import Image from 'models/Image';

function assetsDecorator(ChildComponent) {
  class AssetsContainer extends Component {
    static propTypes = {
      _assets: PropTypes.array,
    };

    render() {
      const { _assets } = this.props;
      const assets = new Assets(_assets.map((props) => {
        return new Image(props);
      }));

      return (<ChildComponent {...this.props} assets={assets} />);
    }
  }

  return connect(state => ({
    _assets: state.assets
  }))(AssetsContainer);
}

export default assetsDecorator;
