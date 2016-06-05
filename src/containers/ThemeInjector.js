import React, { Component, PropTypes } from 'react';

function themeInjectorDecorator(ChildComponent) {
  class ThemeInjector extends Component {
    static defaultProps = {
      theme: {},
    };

    render() {
      const compName = ChildComponent.prototype.constructor.name;
      const scalesTheme = this.context.scalesTheme[compName] || {};
      const styles = Object.assign({}, scalesTheme, this.props.theme);
      const props = Object.assign({}, this.props, { theme: styles });
      return (<ChildComponent theme={styles} {...props} />);
    }
  }

  ThemeInjector.propTypes = {
    theme: PropTypes.object,
  };

  ThemeInjector.contextTypes = {
    scalesTheme: PropTypes.object
  };

  return ThemeInjector;
}

export default themeInjectorDecorator;
