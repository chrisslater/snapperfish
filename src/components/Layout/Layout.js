import React, { PropTypes, Component } from 'react';
import { themeable } from 'rethemeable';
import classNames from 'classnames';
import themeInjector from 'containers/themeInjector';

@themeInjector
class Layout extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,

    ]),
    isCentered: PropTypes.bool,
    isExtended: PropTypes.bool,
  };

  render() {
    const {
      theme,
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

export default Layout;
