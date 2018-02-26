import {
  REQUEST_CARD_ITEM,
  SUCCESS_CARD_ITEM
} from '../constants';

export const getCityWeather = () => ({
  type: REQUEST_CARD_ITEM,
});

export const servcieOrderFormSuccess = data => ({
  type: SUCCESS_CARD_ITEM,
  data,
});