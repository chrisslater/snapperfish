import React, { Component, PropTypes } from 'react';
import { themeable } from 'rethemeable';

/**
 * Image
 */
@themeable
class Image extends Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string,
  };

  static defaultProps = {
    alt: '',
  };

  /**
   * @param {Object} props
   * @param {!string} props.src
   * @param {string} props.alt
   * @param {string} props.title
   * @param {number} props.width
   * @param {number} props.height
   * @returns {Element}
   */
  render() {
    const theme = this.theme;
    const {
      src,
      alt,
    } = this.props; // @TODO Linter complains if it cant see this explicitly

    if (typeof src !== 'string') {
      return null;
    }

    const props = Object.assign({}, this.props);
    delete props.src;
    delete props.alt;
    return (
      <img className={theme.self} src={src} alt={alt} { ...props } />
    );
  }
}

export default Image;
