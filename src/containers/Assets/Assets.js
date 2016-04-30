import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Assets from 'models/Assets';
import Image from 'models/Image';

function assetsDecorator(ChildComponent) {
  function AssetsContainer(props) {
    const { _assets } = props;
    let assets = [];

    if (_assets.length > 0) {
      assets = new Assets(_assets.map((assetProps) => new Image(assetProps)));
    }

    return <ChildComponent {...props} assets={assets} />;
  }

  AssetsContainer.propTypes = {
    _assets: PropTypes.array,
  };

  return connect(state => ({ _assets: state.assets }))(AssetsContainer);
}

export default assetsDecorator;
