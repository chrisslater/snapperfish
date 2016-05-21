/* @flow */
const LOAD_SUCCESS = 'features/LOAD_SUCCESS';
const LOAD_SINGLE_SUCCESS = 'features/LOAD_SINGLE_SUCCESS';

type AssetRaw = {
  image: {
    public_id: string;
    // contentType: string;
    url: string;
    height: number;
    width: number;
    format: string;
  };
};

export function mapAsset({ image }: AssetRaw): Object {
  return Object.assign({}, { id: image.public_id }, image);
}

export function mapAssets(items: Array<Object>): Array<Object> {
  return items.map(asset => mapAsset(asset));
}

export default function reducer(state: Array<Object> = [], action: Object = {}): Array<Object> {
  switch (action.type) {
    case LOAD_SUCCESS:
      if (!action.result.results) {
        return state;
      }
      return mapAssets(action.result.results);
    case LOAD_SINGLE_SUCCESS:
      if (!action.result.post) {
        return state;
      }
      return [mapAsset(action.result.post)];
    default:
      return state;
  }
}
