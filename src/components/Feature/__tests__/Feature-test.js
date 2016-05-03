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

    afterEach(function () {
      this.mockProps = undefined;
    });

    describe('image prop', function () {
      it('should render an image', function () {
        this.mockProps.image = {
          src: 'http://snapper.fish/test.jpg',
          alt: 'Test alt tag',
        };
        const component = TestUtils.renderIntoDocument(<Feature {...this.mockProps} />);
        const image = TestUtils.scryRenderedDOMComponentsWithTag(component, 'img')[0];
        expect(image).to.be.ok;
        expect(image.src).to.equal(this.mockProps.image.src);
        expect(image.alt).to.equal(this.mockProps.image.alt);
      });

      it('should not render if image is undefined', function () {
        const component = TestUtils.renderIntoDocument(<Feature {...this.mockProps} />);
        const images = TestUtils.scryRenderedDOMComponentsWithTag(component, 'img');
        expect(images.length < 1).to.be.ok;
      });
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

    describe('publishDate prop', function () {
      it('should render date on the page', function () {
        this.mockProps.publishDate = '2015-05-02';
        const component = TestUtils.renderIntoDocument(<Feature {...this.mockProps} />);
        const el = TestUtils.scryRenderedDOMComponentsWithTag(component, 'time')[0];
        expect(el.getAttribute('datetime')).to.equal('2015-05-02');
        expect(el.innerHTML).to.equal('2015-05-02');
      });
    });
  });
});