import React, { PropTypes } from 'react';
import classNames from 'classnames';
import themeInjector from 'containers/themeInjector';

function Layout(props) {
  const {
    theme,
    children,
    isCentered,
    isExtended,
  } = props;
  const classes = {
    [theme.self]: true,
    [theme.centered]: isCentered,
    [theme.extended]: isExtended,
  };

  return (
    <div className={classNames(classes)}>
      {children}
    </div>
  );
}

Layout.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,

  ]),
  isCentered: PropTypes.bool,
  isExtended: PropTypes.bool,
};

export default themeInjector(Layout);
