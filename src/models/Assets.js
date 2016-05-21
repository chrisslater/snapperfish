class Assets {
  constructor(assets = []) {
    this.items = assets;
  }

  // @TODO: need to cover this incase of failure
  getAssetById(id: string) {
    return this.items.find((asset) => (id === asset.getId()));
  }
}

export default Assets;
