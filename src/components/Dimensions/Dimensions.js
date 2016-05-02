import React, { PropTypes } from 'react';
import { default as dimensions } from 'react-dimensions';

function Dimensions(props) {
  const childrenWithProps = React.Children.map(
    props.children,
    (child) => React.cloneElement(child, props)
  );

  return <div>{childrenWithProps}</div>;
}

Dimensions.propTypes = {
  children: PropTypes.object,
};

export default dimensions()(Dimensions);
