import React, { PropTypes, Component } from 'react';
import { themeable } from 'rethemeable';
import classNames from 'classnames';

@themeable
class LayoutContainer extends Component {
  static propTypes = {
    children: PropTypes.array,
    isCentered: PropTypes.boolean,
    isExtended: PropTypes.boolean,
  };

  render() {
    const theme = this.theme;
    const {
      children,
      isCentered,
      isExtended,
    } = this.props;
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
}

export default LayoutContainer;
