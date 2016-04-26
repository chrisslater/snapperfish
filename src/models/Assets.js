class Assets {
  constructor(assets = []) {
    this.items = assets;
  }

  getAssetById(id: string) {
    return this.items.find((asset) => (id === asset.getId()));
  }
}

export default Assets;
