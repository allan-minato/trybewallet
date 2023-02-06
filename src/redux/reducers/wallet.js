import { FETCH_DATA_SUCCESS, CREATE_EXPENSES, DELETE_EXPENSES } from '../actions';

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
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter((e) => e.id !== action.payload),
    };
  default:
    return state;
  }
};

export default wallet;
