import React, { Component, PropTypes } from 'react';
import { default as dimensions } from 'react-dimensions';

class Dimensions extends Component {
  render () {
    const {
      children,
      containerWidth,
      containerHeight,
    } = this.props;
    const childrenWithProps = React.Children.map(
      children,
      (child, index) => {
        React.cloneElement(child, {
          key: index,
          containerWidth,
          containerHeight,
        })
      }
    );

    return <div>{childrenWithProps}</div>;
  }
}

Dimensions.propTypes = {
  children: PropTypes.object,
};

export default dimensions()(Dimensions);
