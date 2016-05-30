import React, { Component } from 'react';
import { themeable } from 'rethemeable';

/**
 * @param {Object} [theme={}] Can pass optional theme overrides
 */
@themeable
class Footer extends Component {
  render() {
    const theme = this.theme;
    return (
      <footer className={theme.self}>
        <p className={theme.copyright}>© 2016 Snapper.fish</p>
      </footer>
    );
  }
}

export default Footer;
