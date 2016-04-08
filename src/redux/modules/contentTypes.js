/* @flow */

const LOAD = 'contentTypes/LOAD';
const LOAD_SUCCESS = 'contentTypes/LOAD_SUCCESS';
const LOAD_FAIL = 'contentTypes/LOAD_FAIL';
const initialState = {
  isLoaded: false
};

class ContentType {
  constructor(props: Object) {
    Object.assign(this, props);
  }
}

function processContentTypes(contentTypes: Array) {
  const _contentTypes = {};
  contentTypes.forEach(({ name, sys: { id } }) => {
    _contentTypes[name] = new ContentType({
      id: id,
      name: name,
    });
  });
  return _contentTypes;
}

export default function reducer(state: Object = initialState, action: Object = {}): Object {
  switch (action.type) {
    case LOAD_SUCCESS:
      return Object.assign({
        isLoaded: true,
      }, processContentTypes(action.result.items));

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
      return client.getContentTypes();
    }
  };
}
