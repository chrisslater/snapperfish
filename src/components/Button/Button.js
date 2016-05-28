import React, { Component, PropTypes } from 'react';
import { themeable } from 'rethemeable';

@themeable
export default class Button extends Component {
  static propTypes={
    href: PropTypes.string
  };

  render() {
    const theme = this.theme;
    const {
      href,
      target,
    } = this.props;

    const aProps = {};

    if (href) {
      aProps.href = href;
    }

    if (target) {
      aProps.target = target;
    }

    return (
      <a
        className={theme.self}
        { ...aProps }
      >
        {this.props.children}
      </a>
    );
  }
}
