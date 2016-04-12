/* @flow */

const LOAD = 'contentTypes/LOAD';
const LOAD_SUCCESS = 'contentTypes/LOAD_SUCCESS';
const LOAD_FAIL = 'contentTypes/LOAD_FAIL';
const initialState = {
  isLoaded: false
};

type ContentTypeRaw = { name: string; sys: { id: string}; };

class ContentType {
  id: number;
  name: string;

  constructor(props: Object) {
    Object.assign(this, props);
  }
}


export function mapContentType({ name, sys: { id } }: ContentTypeRaw): ContentType {
  return new ContentType({
    id: id,
    name: name,
  });
}

export function mapContentTypes(contentTypes: Array<Object>): Object {
  const _contentTypes = {};
  contentTypes.forEach(contentType => {
    const _contentType = mapContentType(contentType);
    _contentTypes[_contentType.name] = _contentType;
  });
  return _contentTypes;
}

export default function reducer(state: Object = initialState, action: Object = {}): Object {
  switch (action.type) {
    case LOAD:
      return {
        isLoaded: false
      };

    case LOAD_SUCCESS:
      return Object.assign({
        isLoaded: true,
      }, mapContentTypes(action.result.items));

    default:
      return state;
  }
}

export function isLoaded(globalState: Object): boolean {
  return globalState.contentTypes && globalState.contentTypes.isLoaded;
}

export function load(): Object {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => {
      return client.get('content_types');
    }
  };
}
