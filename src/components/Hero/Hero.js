import React, { PropTypes, Component } from 'react';
import { themeable } from 'rethemeable';
import themeInjector from 'containers/themeInjector';

@themeInjector
class Hero extends Component {
  static propTypes = {
    children: PropTypes.array,
  };

  render() {
    const theme = this.props.theme;
    return (
      <div
        className={theme.self}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Hero;
