import React, { PropTypes } from 'react';
import themeInjector from 'containers/themeInjector';

function Button(props) {
  const {
    theme,
    href,
    target,
    children,
  } = props;

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
      {children}
    </a>
  );
}

Button.propTypes = {
  theme: PropTypes.object.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default themeInjector(Button);
