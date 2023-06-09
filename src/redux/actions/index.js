export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const LOGIN = 'LOGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';
export const CREATE_EXPENSES = 'CREATE_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';
export const EDITOR_CHANGE = 'EDITOR_CHANGE';

export const updateEmail = (email) => ({
  type: UPDATE_EMAIL,
  email,
});

export const updatePassword = (password) => ({
  type: UPDATE_PASSWORD,
  password,
});

export const updateExpenses = (updateExpense) => ({
  type: UPDATE_EXPENSES,
  updateExpense,
});

export const fetchDataSuccess = (currencies) => ({
  type: FETCH_DATA_SUCCESS,
  currencies,
});
export const createExpenses = (expenses) => ({
  type: CREATE_EXPENSES,
  expenses,
});
export const deleteExpenses = (payload) => ({
  type: DELETE_EXPENSES,
  payload,
});
export const editExpenses = (newState, idToEdit) => ({
  type: EDIT_EXPENSES,
  idToEdit,
  newState,
});
export const editorChange = (id) => ({
  type: EDITOR_CHANGE,
  id,
});

export const fetchData = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');
  dispatch(fetchDataSuccess(currencies));
};

export const fetchAllInfo = (newState) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const brandNewState = {
    ...newState,
    exchangeRates: data,
  };
  dispatch(createExpenses(brandNewState));
};
