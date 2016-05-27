import React, { Component, PropTypes } from 'react';

function themeInjectorDecorator(ChildComponent) {
  class ThemeInjector extends Component {
    static defaultProps = {
      theme: {},
    };

    render() {
      console.log('ThemeInjector', this.context, ChildComponent.prototype.constructor.name);
      const compName = ChildComponent.prototype.constructor.name;
      const scalesTheme = this.context.scalesTheme[compName] || {};
      const styles = Object.assign({}, scalesTheme, this.props.theme);

      return (<ChildComponent theme={styles} />);
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
