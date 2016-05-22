import React, { PropTypes, Component } from 'react';
import { themeable } from 'rethemeable';
import config from '../../config';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

@themeable
class Menu extends Component {
  static propTypes = {
    title: PropTypes.string,
    depth: PropTypes.number,
    isFixed: PropTypes.bool,
    children: PropTypes.array,
  };

  static defaultProps = {
    title: '',
    depth: 1,
  }

  state = {
    open: false,
  };

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });
  handleMenuItemClick = (path) => {
    browserHistory.push(path);
    this.handleClose();
  };

  disabledOnClick = (event) => {
    event.preventDefault();
  };

  render() {
    const theme = this.theme;
    const {
      title,
      depth,
      isFixed,
    } = this.props;

    const appBarProps = {};

    if (isFixed) {
      appBarProps.className = theme.appBarFixed;
    }

    return (
      <div>
        <AppBar
          title={title}
          onLeftIconButtonTouchTap={this.handleOpen}
          zDepth={depth}
          {...appBarProps}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem onTouchTap={() => this.handleMenuItemClick('/')}>
            <a href={'/'} onClick={this.disabledOnClick} className={theme.link}>
              {config.app.title}
            </a>
          </MenuItem>
          <Divider />
          <MenuItem onTouchTap={() => this.handleMenuItemClick('/')}>
            <a href={'/'} onClick={this.disabledOnClick} className={theme.link}>
              Home
            </a>
          </MenuItem>
          <MenuItem onTouchTap={() => this.handleMenuItemClick('/blog')}>
            <a href={'/blog'} onClick={this.disabledOnClick} className={theme.link}>
              Blog
            </a>
          </MenuItem>
          <MenuItem onTouchTap={() => this.handleMenuItemClick('/styleguide')}>
            <a href={'/styleguide'} onClick={this.disabledOnClick} className={theme.link}>
              Style Guide
            </a>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Menu;
