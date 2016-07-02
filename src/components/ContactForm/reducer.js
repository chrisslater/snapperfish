import {
  SUBMIT_CONTACT_FORM_SUCCEEDED,
  SUBMIT_CONTACT_FORM_LOADING,
  SUBMIT_CONTACT_FORM_FAILED,
} from './constants';

const defaultState = {
  isLoading: false,
  errors: {},
  fields: {},
  isSubmitted: false,
};

export default function reducer(state: Object = defaultState, action: Object = {}): Object {
  switch (action.type) {
    case SUBMIT_CONTACT_FORM_SUCCEEDED:
      console.log('yay state', state);
      return Object.assign({}, defaultState, { isSubmitted: true });
    case SUBMIT_CONTACT_FORM_LOADING:
      console.log('loading state', state);
      return Object.assign({}, state, {
        isLoading: true,
        isSubmitted: false,
        fields: action.payload.fields,
      });
    case SUBMIT_CONTACT_FORM_FAILED:
      console.log('nay state', state, action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.payload.errors,
        fields: action.payload.fields,
      });
    default:
      return state;
  }
}
