/* @flow */
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

export function mapAsset({ fields, sys }: AssetRaw): Object {
  const { id } = sys;
  return Object.assign({}, { id }, fields);
}

export function mapAssets(items: Array<Object>): Array {
  return items.map(asset => mapAsset(asset));
}

export default function reducer(state: Array = [], action: Object = {}) {
  switch (action.type) {
    case LOAD_SUCCESS:
      return mapAssets(action.result.includes.Asset);
    default:
      return state;
  }
}
