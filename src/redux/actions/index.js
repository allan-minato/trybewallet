export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const LOGIN = 'LOGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';
export const CREATE_EXPENSES = 'CREATE_EXPENSES';

export const updateEmail = (email) => ({
  type: UPDATE_EMAIL,
  email,
});

export const updatePassword = (password) => ({
  type: UPDATE_PASSWORD,
  password,
});

export const updateExpenses = (expenses) => ({
  type: UPDATE_EXPENSES,
  expenses,
});

export const fetchDataSuccess = (currencies) => ({
  type: FETCH_DATA_SUCCESS,
  currencies,
});
export const createExpenses = (expenses) => ({
  type: CREATE_EXPENSES,
  expenses,
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
