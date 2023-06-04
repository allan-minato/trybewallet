import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../style/table.css';
import { connect } from 'react-redux';
import { deleteExpenses, editorChange } from '../redux/actions';

class Table extends Component {
  deleteExpense = (id) => {
    const { dispatch } = this.props;
    dispatch(deleteExpenses(id));
  };

  handleClickEditor = (id) => {
    const { dispatch } = this.props;
    dispatch(editorChange(id));
  };

  render() {
    const { expenses } = this.props;
    // console.log(expenses);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              expenses.map((expense) => (
                <tr key={ expense.id }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method }</td>
                  <td>{Number(expense.value).toFixed(2)}</td>
                  <td>{expense.exchangeRates[expense.currency].name}</td>
                  <td>
                    {Number(expense.exchangeRates[expense.currency]
                      .ask).toFixed(2)}
                  </td>
                  <td>
                    {Number(expense.exchangeRates[expense.currency]
                      .ask * expense.value).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      data-testid="edit-btn"
                      onClick={ () => this.handleClickEditor(expense.id) }
                    >
                      Editar
                    </button>
                    <button
                      data-testid="delete-btn"
                      onClick={ () => this.deleteExpense(expense.id) }
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.any,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Table);
