class Features {
  constructor(features = []) {
    this.items = features;
  }

  getItems() {
    return this.items;
  }

  attachAssets(assets) {
    this.items = this.items.map((item) => {
      item.attachAssets(assets);
      return item;
    });
  }
}

export default Features;
