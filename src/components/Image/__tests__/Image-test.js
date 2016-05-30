import React from 'react';
import { expect } from 'chai';
import Image from '../Image';
import shallowWithContext from 'testing/shallowWithContext';
import mountWithContext from 'testing/mountWithContext';
import { render } from 'enzyme';

describe('Component', function () {
  /** @test {Image} **/
  describe('Image', function () {
    describe('#render()', function () {
      /** @test {Image#render()} **/
      it('should render an image with matching attributes', function () {
        const src = 'http://localhost/test.jpg';
        const alt = 'test image';
        const theme = {
          self: 'test-class',
        };
        const component = mountWithContext(
          <Image
            theme={theme}
            src={src}
            alt={alt}
          />
        );
        const img = component.find(`img.${theme.self}`);

        expect(img).to.have.length(1);
        expect(img.node.getAttribute('src')).to.equal(src);
        expect(img.node.getAttribute('alt')).to.equal(alt);
      });
      /** @test {Image#render()} **/
      it('should render no image if src attribute is not passed', function () {
        const theme = {
          self: 'test-class',
        };

        const component = mountWithContext(
          <Image
            theme={theme}
          />
        );
        const img = component.find(`img.${theme.self}`);
        expect(img).to.have.length(0);
      });
    });
  });
});