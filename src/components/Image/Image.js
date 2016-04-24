import React, { Component, PropTypes } from 'react';
import { Themeable } from 'rethemeable';

@Themeable
export default class Image extends Component {

  static propTypes = {
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string,
    alt: PropTypes.string,
  };

  static defaultProps = {
    src: '//https://cdn0.vox-cdn.com/images/verge/default-avatar.v9899025.gif',
  };

  render() {
    const { alt } = this.props; // @TODO Linter complains if it cant see this explicitly
    delete this.props.alt;
    return (
      <img alt={alt} { ...this.props } />
    );
  }
}
