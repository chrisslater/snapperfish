import { expect } from 'chai';
import Image from '../Image';

describe('Image', function() {

  beforeEach(function() {

    this.mock = {
      id: '12345',
      file: {
        contentType: 'jpeg',
        url: '//www.snapper.fish/test-image.jpg',
        details: {
          image: {
            height: 400,
            width: 800,
          },
          size: 3000,
        },
      },
      title: 'This is a mock title',
    };

    this.formattedMock = {
      src: '//www.snapper.fish/test-image.jpg',
      width: 800,
      height: 400,
      alt: 'This is a mock title',
      title: 'This is a mock title',
    };

  });

  afterEach(function () {
    delete this.mock;
    delete this.formattedMock;
  });

  describe('#getId()', function () {
    it('should return the Image id', function () {
      const image = new Image(this.mock);
      expect(image.getId()).to.equal('12345');
    });
  });

  describe('#getFormatted()', function () {
    it('should return a map of image properties', function () {
      const image = new Image(this.mock);
      const formatted = image.getFormatted();
      expect(formatted).to.deep.equal(this.formattedMock);
    });
  });
});