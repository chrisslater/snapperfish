import React, { PropTypes } from 'react';
import themeInjector from 'containers/themeInjector';

function Hero(props) {
  const {
    theme,
    children,
  } = props;

  return (
    <div
      className={theme.self}
    >
      {children}
    </div>
  );
}

Hero.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.array,
};

export default themeInjector(Hero);
