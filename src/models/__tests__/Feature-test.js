import { expect } from 'chai';
import Feature from '../Feature';
import Assets from  '../Assets';
import Image from '../Image';

describe('Model', function () {
  /** @test {Feature} */
  describe('Feature', function () {
    beforeEach(function () {
      this.mockFeature = {
        id: 'abc4444',
        title: 'This is a title',
        slug: 'mocked-up-slug',
        image: {
          id: 'abc12356'
        },
        publishDate: '2015-05-02',
      };
    });

    afterEach(function () {
      this.mockFeature = undefined;
    });

    /** @test {Feature#getId()} */
    describe('#getId()', function () {
      it('should return the feature id', function () {
        const feature = new Feature(this.mockFeature);
        expect(feature.getId()).to.equal(this.mockFeature.id);
      });
    });

    /** @test {Feature#getTitle()} */
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

    describe('#getPublishDate()', function () {
      it('should return the publishDate', function () {
        const feature = new Feature(this.mockFeature);
        expect(feature.getPublishDate()).to.equal(this.mockFeature.publishDate);
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
});