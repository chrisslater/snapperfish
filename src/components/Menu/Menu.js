import React, { PropTypes, Component } from 'react';
import { themeable } from 'rethemeable';
import config from '../../config';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

@themeable
class LayoutContainer extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.array,
  };

  static defaultProps = {
    title: '',
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
    // style={{ position: 'fixed' }}
    return (
      <div>
        <AppBar
          title={this.props.title}
          onLeftIconButtonTouchTap={this.handleOpen}
          zDepth={0}

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

export default LayoutContainer;
