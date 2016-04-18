class Assets {
  constructor(assets = []) {
    this.items = assets;
  }

  getAssetById(id: string) {
    return this.items.find((asset) => {
      return (id === asset.id);
    });
  }
}

export default Assets;