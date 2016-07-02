import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import posts from './posts';
import contactForm from 'components/ContactForm/reducer';

export default combineReducers({
  reduxAsyncConnect,
  posts,
  contactForm,
  routing: routerReducer,
});
