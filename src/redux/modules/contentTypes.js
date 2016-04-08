const LOAD = 'contentTypes/LOAD';
const LOAD_SUCCESS = 'contentTypes/LOAD_SUCCESS';
const LOAD_FAIL = 'contentTypes/LOAD_FAIL';
const initialState = {
  isLoaded: false
};

class ContentType {
  constructor(props) {
    Object.assign(this, props);
  }
}

function processContentTypes(contentTypes) {
  const _contentTypes = {};
  contentTypes.forEach((type) => {
    _contentTypes[type.name] = new ContentType({
      id: type.sys.id,
      name: type.name,
    });
  });
  return _contentTypes;
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_SUCCESS:
      return Object.assign({
        isLoaded: true,
      }, processContentTypes(action.result.items));

    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.contentTypes && globalState.contentTypes.isLoaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => {
      return client.getContentTypes();
    }
  };
}
