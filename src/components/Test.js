import React, { Component } from 'react';
import themeInjector from 'containers/ThemeInjector';

@themeInjector
class Test extends Component {
  render() {
    const props = this.props;
    console.log('Test', props.theme);

    return (
      <div>
        Test
      </div>
    );
  }
}

export default Test;