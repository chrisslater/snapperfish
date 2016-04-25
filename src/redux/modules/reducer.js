import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import assets from './assets';
import features from './features';

export default combineReducers({
  reduxAsyncConnect,
  assets,
  features,
  routing: routerReducer,
});
