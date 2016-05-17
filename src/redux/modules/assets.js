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

export function mapAssets(items: Array<Object>): Array<Object> {
  return items.map(asset => mapAsset(asset));
}

export default function reducer(state: Array<Object> = [], action: Object = {}): Array<Object> {
  switch (action.type) {
    case LOAD_SUCCESS:
      if (!action.result.includes) {
        return state;
      }
      return mapAssets(action.result.includes.Asset);
    default:
      return state;
  }
}
