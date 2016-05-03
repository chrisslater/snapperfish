import React, { Component } from 'react';
import { themeable } from 'rethemeable';

@themeable
export default class Button extends Component {
  render() {
    const theme = this.theme;
    return (
      <button className={theme.self}>Button</button>
    );
  }
}
