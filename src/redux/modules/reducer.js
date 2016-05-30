import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import posts from './posts';

export default combineReducers({
  reduxAsyncConnect,
  posts,
  routing: routerReducer,
});
