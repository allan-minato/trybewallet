import { FETCH_DATA_SUCCESS,
  CREATE_EXPENSES, DELETE_EXPENSES, EDITOR_CHANGE, EDIT_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
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
  case EDITOR_CHANGE:
    return {
      ...state,
      editor: true,
      idToEdit: action.id,
    };
  case EDIT_EXPENSES: {
    const updateExpense = [...state.expenses];
    updateExpense[action.idToEdit] = { ...action.newState,
      id: action.idToEdit,
      exchangeRates: state.expenses[action.idToEdit].exchangeRates,
    };
    return {
      ...state,
      newState: action.newState,
      newIdToEdit: action.idToEdit,
      editor: false,
      idToEdit: 0,
      expenses: updateExpense,
    };
  }
  default:
    return state;
  }
};

export default wallet;
