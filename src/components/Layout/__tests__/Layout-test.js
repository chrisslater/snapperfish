import React from 'react';
import { expect } from 'chai';
import Layout from '../Layout';
import shallowWithContext from 'testing/shallowWithContext';
import { mount } from 'enzyme';

describe('Component', function() {
  /** @test {Layout} **/
  describe('<Layout />', function () {
    /** @test {Layout#render()} **/
    describe('#render()', function () {
      it('should render default class', function () {
        const theme = {
          self: 'test-class'
        };

        const layout  = mount(
          <Layout
            theme={theme}
          >
            <div>child</div>
          </Layout>
        );

        expect(layout.find('.test-class')).has.length(1);
      });

      it('should append extended class', function () {

        const theme = {
          self: 'test-class',
          extended: 'test-extended',
        };

        const layout  = mount(
          <Layout
            theme={theme}
            isExtended
          >
            <div>child</div>
          </Layout>
        );

        expect(layout.find('.test-class.test-extended')).has.length(1);
      });

      it('should append centered class', function () {
        const theme = {
          self: 'test-class',
          centered: 'test-centered',
        };

        const layout  = mount(
          <Layout
            theme={theme}
            isCentered
          >
            <div>child</div>
          </Layout>
        );

        expect(layout.find('.test-class.test-centered')).has.length(1);
      });
    });
  });
});
