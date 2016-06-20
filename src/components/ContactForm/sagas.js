import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import {
  SUBMIT_CONTACT_FORM,
  SUBMIT_CONTACT_FORM_SUCCEEDED,
  SUBMIT_CONTACT_FORM_FAILED,
} from './constants';

export function* helloSaga() {
  console.log('Hello world!');
}

export function* submitForm() {
  try {
    console.log('yay');
    yield put({ type: SUBMIT_CONTACT_FORM_SUCCEEDED });
  } catch (e) {
    yield put({ type: SUBMIT_CONTACT_FORM_FAILED, message: e.message });
  }
}

export function* submitContactForm() {
  console.log('test');
  yield* takeEvery(SUBMIT_CONTACT_FORM, submitForm);
}
