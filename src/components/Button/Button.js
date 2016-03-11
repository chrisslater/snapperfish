import React, {Component} from 'react';
import {Themeable} from 'rethemeable';

@Themeable
export default class Button extends Component {


  render() {
    console.log('button styles', this.theme);
    const theme = this.theme;

    return (
      <button className={theme.Button}>Button</button>
    );
  }
}
