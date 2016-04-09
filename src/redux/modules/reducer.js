import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import contentTypes from './contentTypes';
import features from './features';

export default combineReducers({
  routing: routeReducer,
  reduxAsyncConnect,
  contentTypes,
  features,
});
