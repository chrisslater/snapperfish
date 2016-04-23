class Feature {
  constructor(props: Object) {
    Object.assign(this, props);
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getSlug() {
    return this.slug;
  }

  getImageId() {
    return this.image.id;
  }

  getImage() {
    return this.image;
  }

  setImage(image) {
    this.image = image;
  }

  attachAssets(assets) {
    const image = assets.getAssetById(this.getImageId());

    if (image) {
      this.setImage(image);
    }
  }
}

export default Feature;
