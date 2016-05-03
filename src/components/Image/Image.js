import React, { Component, PropTypes } from 'react';
import { themeable } from 'rethemeable';

@themeable
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
    const theme = this.theme;
    const { alt } = this.props; // @TODO Linter complains if it cant see this explicitly
    const props = Object.assign({}, this.props);
    delete props.alt;
    return (
      <img className={theme.self} alt={alt} { ...props } />
    );
  }
}
