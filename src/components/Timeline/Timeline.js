// @flow
import React, { Component, PropTypes } from 'react';
import { themeable } from 'rethemeable';
import classNames from 'classnames';
import themeInjector from 'containers/themeInjector';

@themeInjector
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
      theme,
      children,
      containerWidth,
      className,
    } = this.props;
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
