import React from 'react';
import shallowWithContext from 'testing/shallowWithContext';
import { expect } from 'chai';
import { Timeline } from 'components';

describe('Component', function () {
  /** @test {Timeline} */
  describe('Timeline', function () {
    describe('#render()', function () {

      it('should display its children', function () {
        const component = shallowWithContext(
          <Timeline>
            <div className="child">Child</div>
            <div className="child">Child</div>
          </Timeline>
        );

        const children = component.children();
        expect(children).to.have.length(2);
      });
      it('should be responsive');

    });
  });
});