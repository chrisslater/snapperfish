import { takeLatest, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
  SUBMIT_CONTACT_FORM,
  SUBMIT_CONTACT_FORM_SUCCEEDED,
  SUBMIT_CONTACT_FORM_LOADING,
  SUBMIT_CONTACT_FORM_FAILED,
} from './constants';
import client from 'helpers/client';
import { API_ERROR } from 'constants';

export function* submitForm({ payload }) {
  yield put({ type: SUBMIT_CONTACT_FORM_LOADING, payload: { fields: payload } });
  yield delay(5000);

  try {
    const res = yield call(client.post, '/api/enquiries', payload);
    yield put({ type: SUBMIT_CONTACT_FORM_SUCCEEDED, payload: res });
  } catch (e) {
    switch (e.status) {
      case 400:
        yield put({
          type: SUBMIT_CONTACT_FORM_FAILED,
          payload: {
            errors: e.response.body.detail.errors,
            fields: payload,
          },
        });
        break;
      default:
        yield put({ type: API_ERROR, payload: e });
    }
  }
}

export function* submitContactForm() {
  yield* takeLatest(SUBMIT_CONTACT_FORM, submitForm);
}
