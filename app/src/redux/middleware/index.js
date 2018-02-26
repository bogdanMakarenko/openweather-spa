import { all } from 'redux-saga/effects';
import weatherDataLoad from './weatherDataLoad';

export default function * rootSaga() {
  yield all([ weatherDataLoad(), ]);
}