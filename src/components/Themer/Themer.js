import React, { Component, PropTypes } from 'react';

class Themer extends Component {
  getChildContext() {
    return { scalesTheme: this.props.scalesTheme };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Themer.propTypes = {
  scalesTheme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

Themer.childContextTypes = {
  scalesTheme: PropTypes.object,
};

export default Themer;
