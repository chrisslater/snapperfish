import React, { PropTypes } from 'react';
import { default as dimensions } from 'react-dimensions';

function Dimensions(props) {
  const {
    children,
    containerWidth,
    containerHeight,
  } = props;
  const childrenWithProps = React.Children.map(
    children,
    (child, index) => {
      React.cloneElement(child, {
        key: index,
        containerWidth,
        containerHeight,
      });
    }
  );

  return <div>{childrenWithProps}</div>;
}

Dimensions.propTypes = {
  containerWidth: PropTypes.number,
  containerHeight: PropTypes.number.isRequired,
  children: PropTypes.object,
};

export default dimensions()(Dimensions);
