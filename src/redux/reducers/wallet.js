import { FETCH_DATA_SUCCESS, CREATE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_DATA_SUCCESS:
    return {
      ...state,
      currencies: action.currencies,
    };
  case CREATE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.expenses,
        id: state.expenses.length }],
    };
  default:
    return state;
  }
};

export default wallet;
