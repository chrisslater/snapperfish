import React, {Component} from 'react';
import {Themeable} from 'rethemeable';

@Themeable
export default class Button extends Component {
  render() {
    const theme = this.theme;
    return (
      <button className={theme.self}>Button</button>
    );
  }
}
