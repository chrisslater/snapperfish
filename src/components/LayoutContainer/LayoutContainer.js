import React, { PropTypes, Component } from 'react';
import { themeable } from 'rethemeable';

@themeable
class LayoutContainer extends Component {
  static propTypes = {
    children: PropTypes.array,
  };

  render() {
    const theme = this.theme;
    return (
      <div className={theme.self}>
        {this.props.children}
      </div>
    );
  }
}

export default LayoutContainer;
