import { expect } from 'chai';
import Post from '../Post';
import Image from '../Image';

// id: string;
// title: string;
// body: string;
// slug: string;
// image: Image;
// publishedDate: string;
//
// public_id: string,
// url: string,
// height: number,
// width: number,
// format: string,

//public_id: string,
//  url: string,
//  height: number,
//  width: number,
//  format: string,

describe('Model', function () {
  /** @test {Post} */
  describe('Post', function () {
    beforeEach(function () {
      this.mock = {
        id: 'abc4444',
        title: 'This is a title',
        slug: 'mocked-up-slug',
        image: {
          public_id: '12345',
          url: 'http://test.local/foo.jpg',
          alt: 'alt',
          title: 'title',
          height: 400,
          width: 400,
          format: 'jpg',
        },
        body: '<h1>Post title</h1>',
        publishedDate: '2015-05-02',
      };
    });

    afterEach(function () {
      this.mock = undefined;
    });

    /** @test {Post#getId()} */
    describe('#getId()', function () {
      it('should return an id', function () {
        const post = new Post(this.mock);
        expect(post.getId()).to.equal(this.mock.id);
      });
    });

    /** @test {Post#getTitle()} */
    describe('#getTitle()', function () {
      it('should return the a title', function () {
        const post = new Post(this.mock);
        expect(post.getTitle()).to.equal(this.mock.title);
      });
    });

    /** @test {Post#getSlug()} */
    describe('#getSlug()', function () {
      it('should return a slug', function () {
        const post = new Post(this.mock);
        expect(post.getSlug()).to.equal(this.mock.slug);
      });
    });

    /** @test {Post#getPublishedDate()} */
    describe('#getPublishedDate()', function () {
      it('should return the publishedDate', function () {
        const post = new Post(this.mock);
        expect(post.getPublishedDate()).to.equal(this.mock.publishedDate);
      });
    });
  });
});