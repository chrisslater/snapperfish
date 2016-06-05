import React, { Component } from 'react';
import themeInjector from 'containers/themeInjector';

/**
 * @param {Object} [theme={}] Can pass optional theme overrides
 */
@themeInjector
class Footer extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <footer className={theme.self}>
        <p className={theme.copyright}>© 2016 Snapper.fish</p>
      </footer>
    );
  }
}

export default Footer;
