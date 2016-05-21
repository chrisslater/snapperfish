import { expect } from 'chai';
import Image from '../Image';

describe('Model', function () {
  describe('Image', function () {
    beforeEach(function () {
      this.mock = {
        id: '12345',
        url: '//www.snapper.fish/test-image.jpg',
        height: 400,
        width: 800,
        title: 'This is a mock title',
      };

      this.formattedMock = {
        src: '//www.snapper.fish/test-image.jpg',
        width: 800,
        height: 400,
        alt: 'This is a mock title',
        title: 'This is a mock title',
      };

      this.image = new Image(this.mock);
    });

    afterEach(function () {
      delete this.mock;
      delete this.formattedMock;
      delete this.image;
    });

    describe('#getId()', function () {
      it('should return the Image id', function () {
        expect(this.image.getId()).to.equal('12345');
      });
    });

    describe('#getFormatted()', function () {
      it('should return a map of image properties', function () {
        const formatted = this.image.getFormatted();
        expect(formatted).to.deep.equal(this.formattedMock);
      });
    });
  });
});