import {
  HOTEL_DETAIL_FAIL,
  HOTEL_DETAIL_REQUEST,
  HOTEL_DETAIL_SUCCESS,
  HOTEL_LIST_FAIL,
  HOTEL_LIST_REQUEST,
  HOTEL_LIST_SUCCESS,
} from '../constants/hotelConstants';
import axios from 'axios';

export const listHotels =
  (keyword = '') =>
  async (dispatch) => {
    var day = keyword.split('_')[0];
    var time = keyword.split('_')[1];
    try {
      dispatch({
        type: HOTEL_LIST_REQUEST,
      });
      if (day && time) {
        const { data } = await axios.get(`/api/hotels?day=${day}&time=${time}`);
        dispatch({
          type: HOTEL_LIST_SUCCESS,
          payload: data,
        });
      } else {
        const { data } = await axios.get(`/api/hotels`);

        dispatch({
          type: HOTEL_LIST_SUCCESS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: HOTEL_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getHotelDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: HOTEL_DETAIL_REQUEST,
    });
    const { data } = await axios.get(`/api/hotels/${id}`);

    dispatch({
      type: HOTEL_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOTEL_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
