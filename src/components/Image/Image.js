import React, { PropTypes } from 'react';
import themeInjector from 'containers/themeInjector';

/**
 * Image
 *
 * @param {Object} props
 * @param {!string} props.src
 * @param {string} props.alt
 * @param {string} props.title
 * @param {number} props.width
 * @param {number} props.height
 * @returns {Element}
 */
function Image(props) {
  const {
    theme,
    src,
    alt,
  } = props; // @TODO Linter complains if it cant see this explicitly

  if (typeof src !== 'string') {
    return null;
  }

  const newProps = Object.assign({}, props);
  delete newProps.src;
  delete newProps.alt;
  return (
    <img className={theme.self} src={src} alt={alt} { ...newProps } />
  );
}

Image.propTypes = {
  theme: PropTypes.object.isRequired,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
};

export default themeInjector(Image);
