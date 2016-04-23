import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Assets from 'models/Assets';
import Image from 'models/Image';

function assetsDecorator(ChildComponent) {
  const AssetsContainer = function (props) {
    const { _assets } = props;
    const assets = new Assets(_assets.map((assetProps) => new Image(assetProps)));
    return <ChildComponent {...props} assets={assets} />;
  };

  AssetsContainer.propTypes = {
    _assets: PropTypes.array,
  };

  return connect(state => ({ _assets: state.assets }))(AssetsContainer);
}

export default assetsDecorator;
