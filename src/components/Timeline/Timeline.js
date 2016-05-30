// @flow
import React, { Component, PropTypes } from 'react';
import { themeable } from 'rethemeable';
import classNames from 'classnames';

@themeable
class Timeline extends Component {
  static propTypes = {
    containerWidth: PropTypes.number,
    timeline: PropTypes.array.isRequired,
  };

  /**
   * @param {Object} props
   * @param {!string} props.containerWidth
   * @returns {Element}
   */
  render() {
    const {
      timeline,
      containerWidth,
    } = this.props;
    const theme = this.theme;
    let childrenWithProps = timeline;
    const classes = [theme.self];

    if (containerWidth > 680) {
      /*
       * @TODO figure out why I can't just do this with children
       * It has something to do with the Dimensions wrapper
       */
      childrenWithProps = React.Children.map(
        timeline,
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
