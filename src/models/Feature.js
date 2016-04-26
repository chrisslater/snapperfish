import Image from 'models/Image';

/* @flow */
class Feature {
  id: string;
  title: string;
  slug: string;
  image: Object;

  constructor(props: Object) {
    Object.assign(this, props);
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
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

  attachAssets(assets): void {
    const image = assets.getAssetById(this.getImageId());

    if (image instanceof Image) {
      this.setImage(image);
    }
  }
}

export default Feature;
