

import React, { PropTypes, Component } from 'react';
import { themeable } from 'rethemeable';
import config from '../../config';

import { IndexLink, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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

  render() {
    // const theme = this.theme;
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
          <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
            <span>{config.app.title}</span>
          </IndexLink>
          <MenuItem onTouchTap={() => this.handleMenuItemClick('/')}>
            Home
          </MenuItem>
          <MenuItem onTouchTap={() => this.handleMenuItemClick('/styleguide')}>
            Style Guide
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default LayoutContainer;
