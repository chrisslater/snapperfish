/* @flow */
const LOAD_SUCCESS = 'features/LOAD_SUCCESS';

class Asset {
  constructor(props: Object) {
    Object.assign(this, props);
  }

  getFormattedDetails() {
    return {
      src: this.file.url,
      width: this.details.image.width,
      height: this.details.image.height,
      alt: this.title,
      title: this.title,
    };
  }
}

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

type AssetRaw = {
  fields: {
    file: {
      contentType: string;
      url: string;
      details: {
        image: {
          height: number;
          width: number;
        };
        size: number;
      };
    };
    title: string;
  };
  sys: {
    id: string;
  };
};

export function mapAsset({ fields, sys }: AssetRaw): Asset {
  const {
    id: id
  } = sys;

  return new Asset(Object.assign({}, { id: id }, fields));
}

export function mapAssets(items: Array<Object>): Assets {
  const assets = items.map(asset => mapAsset(asset));
  return new Assets(assets);
}

export default function reducer(state: Object = {}, action: Object = {}): Object {
  switch (action.type) {
    case LOAD_SUCCESS:
      return mapAssets(action.result.includes.Asset);

    default:
      return state;
  }
}