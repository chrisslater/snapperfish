import React from 'react';
import { expect } from 'chai';
import Feature from '../Feature';
import { Image } from 'components';
import shallowWithContext from 'testing/shallowWithContext';

describe('Component', function () {
  describe('<Feature />', function () {
    beforeEach(function () {
      this.mockProps = {
        title:'Test title headline',
        theme: {
          body: 'body',
        },
        body: '',
        publishDate: '',
      };
    });

    afterEach(function () {
      this.mockProps = undefined;
    });

    describe('Image', function () {
      it('should render an image with matching props', function () {
        this.mockProps.image = {
          src: 'http://snapper.fish/test.jpg',
          alt: 'Test alt tag',
        };
        const component = shallowWithContext(<Feature {...this.mockProps} />);
        const image = component.find(Image);
        expect(image).to.have.length(1);
        expect(image.node.props.src).to.equal(this.mockProps.image.src);
        expect(image.node.props.alt).to.equal(this.mockProps.image.alt);
      });

      it('should not render an image if no props are given', function () {
        const component = shallowWithContext(<Feature {...this.mockProps} />);
        const image = component.find(Image);
        expect(image).to.have.length(0);
      });
    });

    describe('title prop', function () {
      it('should render a h1 title', function () {
        const component = shallowWithContext(<Feature {...this.mockProps} />);
        const title = component.find('h1');
        expect(title).to.have.length(1);
        expect(title.node.props.children).to.equal('Test title headline');
      });
    });

    describe('body prop', function () {
      it('should render markdown if body exists', function () {
        this.mockProps.body = '##Test header';
        const component = shallowWithContext(<Feature {...this.mockProps} />);
        const body = component.find('.body');
        expect(body.node.props.dangerouslySetInnerHTML.__html).to.equal('<h2>Test header</h2>');
      });

      it('should not render if body is undefined', function () {
        const component = shallowWithContext(<Feature {...this.mockProps} />);
        const body = component.find('.body');
        expect(body).to.have.length(0);
      });
    });

    describe('publishDate prop', function () {
      it('should render date on the page', function () {
        this.mockProps.publishDate = '2015-05-02';
        const component = shallowWithContext(<Feature {...this.mockProps} />);
        const time = component.find('time');
        expect(time.node.props.dateTime).to.equal('2015-05-02');
        expect(time.node.props.children).to.equal('May 2nd, 2015');
      });
    });
  });
});
