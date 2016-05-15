import React from 'react';
import { expect } from 'chai';
import Skills from '../Skills';
import LinearProgress from 'material-ui/LinearProgress';

import { shallow } from 'enzyme';
// Why we are using context in this way: https://github.com/callemall/material-ui/pull/3820
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme();

const shallowWithContext = (node, context = {}) => {
  return shallow(node, {
    context: { muiTheme, ...context },
  });
};

describe('Component', function() {
  describe('<Skills />', function () {
    it('should render null if no skills are given', function () {
      const wrapper = shallowWithContext(<Skills />);
      expect(wrapper.node).to.be.null;
    });

    it('should render one skill', function () {
      const mockSkills = [{
        name: 'Javascript',
        level: 0.75,
      }];

      const wrapper = shallowWithContext(<Skills skills={mockSkills} />);
      expect(wrapper.find(LinearProgress)).to.have.length(1);
    });
  });
});
