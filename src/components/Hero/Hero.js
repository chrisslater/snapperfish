import React, { PropTypes, Component } from 'react';
import { themeable } from 'rethemeable';

@themeable
class Hero extends Component {
  static propTypes = {
    children: PropTypes.array,
  };

  render() {
    const theme = this.theme;
    const image = require('./darth_vader1.jpg');
    return (
      <div
        className={theme.self}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Hero;
