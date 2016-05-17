import React from 'react';
import { expect } from 'chai';
import LayoutContainer from '../LayoutContainer';
import shallowWithContext from 'testing/shallowWithContext';
import { mount } from 'enzyme';

describe('Component', function() {
  describe('<LayoutContainer />', function () {
    it('should render default class', function () {
      const theme = {
        self: 'test-class'
      };

      const layout  = mount(
        <LayoutContainer theme={theme}>
          <div>child</div>
        </LayoutContainer>
      );

      expect(layout.find('.test-class')).has.length(1);
    });
  });
});
