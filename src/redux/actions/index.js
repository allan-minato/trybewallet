import { UPDATE_EMAIL, UPDATE_PASSWORD } from './ActionTypes';

export const updateEmail = (email) => ({
  type: UPDATE_EMAIL,
  email,
});

export const updatePassword = (password) => ({
  type: UPDATE_PASSWORD,
  password,
});
