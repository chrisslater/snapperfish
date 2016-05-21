/* @flow */
import Image from 'models/Image';
import type { Feature as FeatureType } from 'types/Feature';

/**
 * A Feature is effectively a mini blog post
 * at the moment and this is the interface of hydrated api properties
 * and utils for the UI.
 * @example
 * let props = {
 *   id: "123456",
 *   title: "Readable title describing the feature"
 * };
 * let feature = new Feature(props);
 */
class Feature {
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
  constructor(props: FeatureType): void {
    Object.assign(this, props, {
      image: new Image(props.image),
    });
  }

/**
 * The Features ID string
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

  getBody(): string {
    return this.body;
  }

  getSlug(): string {
    return this.slug;
  }

  getImageId(): string {
    return this.image.id;
  }

  getImage(): Object {
    return this.image;
  }

  setImage(image: Image): void {
    this.image = image;
  }

  getPublishedDate() {
    return this.publishedDate;
  }

  attachAssets(assets): void {
    const image = assets.getAssetById(this.getImageId());

    if (image instanceof Image) {
      this.setImage(image);
    }
  }

  isFeatured(): bool {
    return false;
  }
}

export default Feature;
