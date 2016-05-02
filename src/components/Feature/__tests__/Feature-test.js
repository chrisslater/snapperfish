import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Feature from '../Feature';
import TestUtils from 'react-addons-test-utils';

describe('Feature component', function () {
  describe('rendering', function () {
    beforeEach(function () {
      this.mockProps = {
        title:'Test title headline',
        theme: {
          body: 'body',
        },
      };
    });

    describe('title prop', function () {
      it('should render a h1 title', function () {
        const component = TestUtils.renderIntoDocument(<Feature {...this.mockProps} />);
        const el = TestUtils.scryRenderedDOMComponentsWithTag(component, 'h1')[0];
        expect(el.innerHTML).to.equal('Test title headline');
      });
    });

    describe('body prop', function () {
      it('should render markdown if body exists', function () {
        this.mockProps.body = '#Test header';
        const component = TestUtils.renderIntoDocument(<Feature {...this.mockProps} />);
        const body = TestUtils.scryRenderedDOMComponentsWithClass(component, 'body')[0];
        expect(body.innerHTML).to.equal('<h1>Test header</h1>');
      });

      it('should not render if body is undefined', function () {
        const component = TestUtils.renderIntoDocument(<Feature {...this.mockProps} />);
        const body = TestUtils.scryRenderedDOMComponentsWithClass(component, 'body')[0];
        expect(body).to.equal(undefined);
      });
    });
  });
});