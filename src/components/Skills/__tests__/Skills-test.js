import React from 'react';
import { expect } from 'chai';
import Skills from '../Skills';
import LinearProgress from 'material-ui/LinearProgress';
import mountWithContext from 'testing/mountWithContext';

describe('Component', function() {
  describe('<Skills />', function () {
    it('should render null if no skills are given', function () {
      const wrapper = mountWithContext(
        <Skills
          theme={{ skills : 'skills' }}
          skills={[]}
          containerWidth={300}
        />
      );

      expect(wrapper.find('.skills')).to.have.length(0);
    });

    it('should render one skill', function () {
      const mockSkills = [{
        name: 'Javascript',
        level: 0.75,
      }];

      const wrapper = mountWithContext(
        <Skills
          theme={{ skills : 'skills' }}
          skills={mockSkills}
          containerWidth={300}
        />
      );

      expect(wrapper.find(LinearProgress)).to.have.length(1);
    });
  });
});
