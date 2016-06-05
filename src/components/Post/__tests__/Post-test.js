import React from 'react';
import { expect } from 'chai';
import Post from '../Post';
import { Image } from 'components';
import shallowWithContext from 'testing/shallowWithContext';
import mountWithContext from 'testing/mountWithContext';

describe('Component', function () {
  /** @test {Post} **/
  describe('Post', function () {
    beforeEach(function () {
      this.mockProps = {
        title:'Test title headline',
        theme: {
          body: 'body',
        },
        body: '',
        publishedDate: '',
        image: {
          src: 'http://snapper.fish/test.jpg',
          alt: 'Test alt tag',
        },
      };
    });

    afterEach(function () {
      this.mockProps = undefined;
    });

    describe('Image', function () {
      /** @test {Post#getImage()} **/
      it('should render an image with matching props', function () {
        const component = mountWithContext(<Post {...this.mockProps} />);
        const image = component.find(Image);
        expect(image).to.have.length(1);
        expect(image.node.props.src).to.equal(this.mockProps.image.src);
        expect(image.node.props.alt).to.equal(this.mockProps.image.alt);
      });

      /** @test {Post#getImage()} **/
      it('should not render an image if no props are given', function () {
        delete this.mockProps.image;
        const component = mountWithContext(<Post {...this.mockProps} />);
        const image = component.find(Image);
        expect(image).to.have.length(0);
      });
    });


    describe('title prop', function () {
      it('should render a h1 title', function () {
        const component = mountWithContext(<Post {...this.mockProps} />);
        const title = component.find('h1');
        expect(title).to.have.length(1);
        expect(title.node.innerText).to.equal('Test title headline');
      });
    });

    describe('body prop', function () {
      /** @test {Post#getBody()} **/
      it('should render html as string if body exists', function () {
        this.mockProps.body = '<h2>Test header</h2>';
        const component = mountWithContext(<Post {...this.mockProps} />);
        const body = component.find('.body');
        expect(body.node.innerHTML).to.equal('<h2>Test header</h2>');
      });

      /** @test {Post#getBody()} **/
      it('should not render if body is undefined', function () {
        const component = mountWithContext(<Post {...this.mockProps} />);
        const body = component.find('.body');
        expect(body).to.have.length(0);
      });
    });

    describe('publishedDate prop', function () {
      /** @test {Post#getPublishedDate()} **/
      it('should render date on the page', function () {
        this.mockProps.publishedDate = '2015-05-02';
        const component = mountWithContext(<Post {...this.mockProps} />);
        const time = component.find('time');
        expect(time.node.getAttribute('datetime')).to.equal('2015-05-02');
        expect(time.node.innerText).to.equal('May 2nd, 2015');
      });
    });
  });
});
