/* @flow */
import Asset from './models/Asset';
import Assets from './models/Assets';
const LOAD_SUCCESS = 'features/LOAD_SUCCESS';

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
