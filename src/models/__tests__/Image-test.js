import { expect } from 'chai';
import Image from '../Image';

describe('Image', function describeImage() {
  beforeEach(function beforeEach() {
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

    this.image = new Image(this.mock);
  });

  afterEach(function afterEach() {
    delete this.mock;
    delete this.formattedMock;
    delete this.image;
  });

  describe('#getId()', function describeGetId() {
    it('should return the Image id', function itGetId() {
      expect(this.image.getId()).to.equal('12345');
    });
  });

  describe('#getFormatted()', function describeGetFormatted() {
    it('should return a map of image properties', function itGetFormatted() {
      const formatted = this.image.getFormatted();
      expect(formatted).to.deep.equal(this.formattedMock);
    });
  });
});
