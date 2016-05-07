import React, { Component } from 'react';
import { themeable } from 'rethemeable';

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

export default themeable(Footer);
