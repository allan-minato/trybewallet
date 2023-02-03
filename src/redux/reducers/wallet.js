import { FETCH_DATA_SUCCESS } from '../actions/ActionTypes';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_DATA_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((currencie) => currencie !== 'USDT'), // transformando o retorno da API (currencies) em um array e removendo a moeda "USDT"//
    };
  default:
    return state;
  }
};

export default wallet;
