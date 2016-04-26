import { expect } from 'chai';
import Feature from '../Feature';
import Assets from  '../Assets';
import Image from '../Image';

describe('Feature', function () {
  beforeEach(function () {
    this.mockFeature = {
      id: 'abc4444',
      title: 'This is a title',
      slug: 'mocked-up-slug',
      image: {
        id: 'abc12356'
      }
    };
  });

  afterEach(function () {
    this.mockFeature = undefined;
  });

  describe('#getId()', function () {
    it('should return the feature id', function () {
      const feature = new Feature(this.mockFeature);
      expect(feature.getId()).to.equal(this.mockFeature.id);
    });
  });

  describe('#getTitle()', function () {
    it('should return the feature title', function () {
      const feature = new Feature(this.mockFeature);
      expect(feature.getTitle()).to.equal(this.mockFeature.title);
    });
  });

  describe('#getSlug()', function () {
    it('should return the feature slug', function () {
      const feature = new Feature(this.mockFeature);
      expect(feature.getSlug()).to.equal(this.mockFeature.slug);
    });
  });

  describe('#attachAssets(assets: Assets)', function () {
    it('should find and attach assets', function () {
      const _assets = [];
      const mockImage = {
        id: 'abc12356',
      };

      _assets.push(new Image(mockImage));
      const assets = new Assets(_assets);
      const feature = new Feature(this.mockFeature);
      feature.attachAssets(assets);
      expect(feature.getImage()).to.be.instanceof(Image);
    });
  });
});