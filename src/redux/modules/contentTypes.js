const LOAD = 'contentTypes/LOAD';
const LOAD_SUCCESS = 'contentTypes/LOAD_SUCCESS';
const LOAD_FAIL = 'contentTypes/LOAD_FAIL';
const ADD = 'contentTypes/ADD';

const initialState = {
  loaded: false,
  loading: false,
  types: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        loading: true,
      };
    case ADD:
      return state.types.push(action.payload);
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  console.log('isLoaded', globalState);
  return globalState.contentTypes && globalState.contentTypes.types;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => {

      console.log('client', client);
      return client.get('/widget/load/param1/param2')
    }// params not used, just shown as demonstration
  };
}
