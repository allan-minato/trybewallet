import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './ActionTypes';

export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    dispatch({ type: FETCH_DATA_SUCCESS, payload: currencies });
  } catch (error) {
    dispatch({ type: FETCH_DATA_ERROR, payload: error });
  }
};
