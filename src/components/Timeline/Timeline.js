// @flow
import React, { Component, PropTypes } from 'react';
import { themeable } from 'rethemeable';
import classNames from 'classnames';

@themeable
class Timeline extends Component {
  static propTypes = {
    containerWidth: PropTypes.number,
  };

  /**
   * @param {Object} props
   * @param {!string} props.containerWidth
   * @returns {Element}
   */
  render() {
    const {
      children,
      containerWidth,
      className,
    } = this.props;
    const theme = this.theme;
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
}

export default Timeline;
