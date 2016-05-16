import React, { PropTypes, Component } from 'react';
import { themeable } from 'rethemeable';
import classNames from 'classnames';

@themeable
class LayoutContainer extends Component {
  static propTypes = {
    children: PropTypes.array,
    center: PropTypes.boolean,
  };

  render() {
    const theme = this.theme;
    const {
      children,
      center,
    } = this.props;
    const classes = {
      [theme.self]: true,
      [theme.center]: center,
    };

    return (
      <div className={classNames(classes)}>
        {children}
      </div>
    );
  }
}

export default LayoutContainer;
