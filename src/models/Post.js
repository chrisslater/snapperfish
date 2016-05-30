// @flow
import Image from 'models/Image';
import type { Post as PostType } from 'types/Post';

/**
 * Post interface of hydrated api properties
 * and utils for the UI.
 * @example
 * let props = {
 *   id: "123456",
 *   title: "Readable title describing the feature",
 *   slug: "readable-title",
 *   body: "<p>Some paragraph text</p>",
 *   image: {
 *     src: "http://test.local/image.jpg",
 *     alt: "test image"
 *   }
 * };
 * let post = new Post(props);
 */
class Post {
  id: string;
  title: string;
  body: string;
  slug: string;
  image: Image;
  publishedDate: string;

  /**
   * This is the constructor, currently it automatically binds fed in
   * props on the the class.
   * @param {Object} props Object of properties.
   * @param {string} props.id - This is the Features unique identifier.
   * @param {string} props.title - This is the readable title.
   */
  constructor(props: PostType): void {
    Object.assign(this, props, {
      image: new Image(props.image),
    });
  }

/**
 * An ID as a string
 * @return {string} The ID string
 */
  getId(): string {
    return this.id;
  }

  /**
   * The Features ID string
   * @return {string} a readable title, think blog title stylie
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * HTML body as a string
   * @return {string} Returns html as a string
   */
  getBody(): string {
    return this.body;
  }

  /**
   * @return {string}
   */
  getSlug(): string {
    return this.slug;
  }

  /**
   * @return {Object}
   */
  getImage(): Object {
    return this.image;
  }

  /**
   * @return {Date} Date as string
   */
  getPublishedDate(): string {
    return this.publishedDate;
  }
}

export default Post;
