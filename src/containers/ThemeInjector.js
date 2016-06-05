import React, { Component, PropTypes } from 'react';

function themeInjectorDecorator(ChildComponent) {
  class ThemeInjector extends Component {
    static defaultProps = {
      theme: {},
    };

    render() {
      const compName = ChildComponent.prototype.constructor.name;
      const { scalesTheme } = this.context;
      let themeFromContext = {};

      if (scalesTheme && scalesTheme[compName] !== undefined) {
        themeFromContext = scalesTheme[compName];
      }

      const styles = Object.assign({}, themeFromContext, this.props.theme);
      const props = Object.assign({}, this.props, { theme: styles });
      return (<ChildComponent {...props} />);
    }
  }

  ThemeInjector.propTypes = {
    theme: PropTypes.object,
  };

  ThemeInjector.contextTypes = {
    scalesTheme: PropTypes.object,
  };

  return ThemeInjector;
}

export default themeInjectorDecorator;
