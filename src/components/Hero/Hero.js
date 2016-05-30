import React, { PropTypes, Component } from 'react';
import { themeable } from 'rethemeable';

@themeable
class Hero extends Component {
  static propTypes = {
    children: PropTypes.array,
  };

  render() {
    const theme = this.theme;
    return (
      <div
        className={theme.self}
        style={{
          backgroundImage: 'url(/files/profile-background-star-wars.jpg)',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Hero;
