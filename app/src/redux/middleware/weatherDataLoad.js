import { put, takeEvery, call } from 'redux-saga/effects';
import {SUCCESS_CARD_ITEM, REQUEST_CARD_ITEM, CARD_ITEM_ACTION_FAILURE} from '../constants';
import { getWeather } from '../Api/getWeather';
import { constants } from 'utils/constants';

const getWeatherFromAPI = () => getWeather(constants.cityName);

function * serviceOrderAsync(action) {
  try {
    const data = yield call(getWeatherFromAPI);

    console.log(data);
    yield put({ type: SUCCESS_CARD_ITEM, data });
  } catch (e) {
    yield put({ type: CARD_ITEM_ACTION_FAILURE });
  }
}

export default function * weatherDataLoad() {
  yield takeEvery(REQUEST_CARD_ITEM, serviceOrderAsync);
}