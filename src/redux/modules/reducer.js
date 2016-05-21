import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import features from './features';

export default combineReducers({
  reduxAsyncConnect,
  features,
  routing: routerReducer,
});
