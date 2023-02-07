import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux, renderWithRouterAndRedux } from './helpers/renderWith';

import Login from '../pages/Login';
import App from '../App';

const PASSWORD = '123456';
const EMAIL = 'teste@teste.com';
const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';

describe('Teste Login', () => {
  it('Teste se os elementos são renderizados', () => {
    renderWithRedux(<Login />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    expect(inputEmail).toBeInTheDocument();
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    expect(inputPassword).toBeInTheDocument();
    const loginBtn = screen.getByRole('button');
    expect(loginBtn).toBeInTheDocument();
  });

  it('Teste se o botão é habilitado', () => {
    renderWithRedux(<Login />);

    const loginBtn = screen.getByRole('button');
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    expect(loginBtn.disabled).toBe(true);
    userEvent.type(inputEmail, EMAIL);
    userEvent.type(inputPassword, PASSWORD);
    expect(loginBtn.disabled).toBe(false);
  });

  it('Teste se ao clicar no botão o usuário é redirecionado para a Carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const loginBtn = screen.getByRole('button');
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    userEvent.type(inputEmail, EMAIL);
    userEvent.type(inputPassword, PASSWORD);
    userEvent.click(loginBtn);
    expect(history.location.pathname).toBe('/carteira');
  });
});
