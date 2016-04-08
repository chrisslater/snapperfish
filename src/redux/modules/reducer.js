import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import contentTypes from './contentTypes';

export default combineReducers({
  routing: routeReducer,
  reduxAsyncConnect,
  contentTypes,
});
