import React from 'react';
import { expect } from 'chai';
import Skills from '../Skills';
import LinearProgress from 'material-ui/LinearProgress';
import shallowWithContext from 'testing/shallowWithContext';

describe('Component', function() {
  describe('<Skills />', function () {
    it('should render null if no skills are given', function () {
      const wrapper = shallowWithContext(<Skills skills={[]} />);
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
