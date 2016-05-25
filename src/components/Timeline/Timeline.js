// @flow
import React, { Component, PropTypes } from 'react';
import { themeable } from 'rethemeable';

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
    } = this.props;
    const theme = this.theme;

    const childrenWithProps = React.Children.map(
      children,
      (child, i) => {
        return React.cloneElement(child, { isLeft: !(i % 2) });
      }
    );

    return (
      <div className={theme.self}>
        {childrenWithProps}
      </div>
    );
  }
}

export default Timeline;
