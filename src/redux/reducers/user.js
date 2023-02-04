import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
} from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_EMAIL:
    return {
      ...state,
      email: action.email,
    };

  case UPDATE_PASSWORD:
    return {
      ...state,
      password: action.password,
    };
  default:
    return state;
  }
};

export default user;
