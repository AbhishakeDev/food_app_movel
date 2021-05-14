import {
  HOTEL_DETAIL_FAIL,
  HOTEL_DETAIL_REQUEST,
  HOTEL_DETAIL_SUCCESS,
  HOTEL_LIST_FAIL,
  HOTEL_LIST_REQUEST,
  HOTEL_LIST_SUCCESS,
} from '../constants/hotelConstants';

const initialState = {
  hotels: [],
};

export const hotelListReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOTEL_LIST_REQUEST:
      return { loading: true };
    case HOTEL_LIST_SUCCESS:
      return { loading: false, hotels: action.payload };
    case HOTEL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const hotelDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case HOTEL_DETAIL_REQUEST:
      return { loading: true };
    case HOTEL_DETAIL_SUCCESS:
      return { loading: false, hotelInfo: action.payload };
    case HOTEL_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
