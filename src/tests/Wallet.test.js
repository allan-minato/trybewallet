import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';

const VALUE = '40';
// const DESCIPTION = 'Mec Donalds';

describe('Test Wallet.', () => {
  it('Testa se "Adicionar despesa" é funcional.', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ ...mockData }),
    });
    renderWithRouterAndRedux(<Wallet />);

    const valueInput = screen.getByTestId('value-input');
    const btnAddExpense = screen.getByRole('button', { name: 'Adicionar despesa' });
    userEvent.type(valueInput, VALUE);
    userEvent.click(btnAddExpense);
    const totalExpenses = screen.getByTestId('total-field');
    await waitFor(() => expect(totalExpenses.innerHTML).not.toBe('0.00'));
  });
});
