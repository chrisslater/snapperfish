// @flow
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import themeInjector from 'containers/themeInjector';

/**
 * @param {Object} props
 * @param {!string} props.containerWidth
 * @returns {Element}
 */
function Timeline(props) {
  const {
    theme,
    children,
    className,
  } = props;
  let childrenWithProps = children;
  const classes = [theme.self];

  if (className === 'large') {
    /*
     * @TODO figure out why I can't just do this with children
     * It has something to do with the Dimensions wrapper
     */
    childrenWithProps = React.Children.map(
      children,
      (child, i) => React.cloneElement(child, {
        direction: (i % 2) ? 'left' : 'right',
      })
    );

    classes.push(theme.inline);
  }

  return (
    <div className={classNames(classes)}>
      {childrenWithProps}
    </div>
  );
}

Timeline.propTypes = {
  containerWidth: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.object.isRequired,
};

export default themeInjector(Timeline);
