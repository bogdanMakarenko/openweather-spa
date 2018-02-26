import {SUCCESS_CARD_ITEM, REQUEST_CARD_ITEM, CARD_ITEM_ACTION_FAILURE} from '../constants';

const initialState = {
  sendData: false,
  errorMessage: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CARD_ITEM:
      return { ...state, sendData: true };

    case SUCCESS_CARD_ITEM:
      return { ...state, sendData: false, data: [ action.data ] };

    case CARD_ITEM_ACTION_FAILURE:
      return { ...state, sendData: false, errorMessage: true };

    default:
      return state;
  }
};