import React, { PropTypes } from 'react';

function themeInjectorDecorator(ChildComponent) {
  const ThemeInjector = props => {
    console.log('ThemeInjector', this.context);
    return (<ChildComponent {...props} />);
  };

  ThemeInjector.propTypes = {
    //theme: PropTypes.array,
  };

  ThemeInjector.contextTypes = {
    scalesTheme: React.PropTypes.object
  };

  return ThemeInjector;
}

export default themeInjectorDecorator;
