import React, { PropTypes } from 'react';
import themeInjector from 'containers/themeInjector';

/**
 * @param {Object} [theme={}] Can pass optional theme overrides
 */
function Footer(props) {
  const theme = props.theme;
  return (
    <footer className={theme.self}>
      <p className={theme.copyright}>© 2016, Snapper Fish Ltd</p>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default themeInjector(Footer);
