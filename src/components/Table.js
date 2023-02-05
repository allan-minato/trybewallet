import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../style/table.css';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (

      <tbody>
        { expenses.map((expense) => (
          <tr key={ expense.id } className="table">
            <td>
              Descrição:
              {expense.description}
            </td>
            <td>
              Tag:
              {expense.tag}
            </td>
            <td>
              Método de pagamento:
              {expense.method}
            </td>
            <td>
              Valor:
              <td>{Number(expense.value).toFixed(2)}</td>
            </td>
            <td>
              Moeda:
              {expense.exchangeRates[expense.currency].name}
            </td>
            <td>
              Câmbio utilizado
              {Number(expense.exchangeRates[expense.currency]
                .ask).toFixed(2)}
            </td>
            <td>
              Valor convertido
              {Number(expense.exchangeRates[expense.currency]
                .ask * expense.value).toFixed(2)}
            </td>
            <td>Real</td>
            <td>Editar/Excluir</td>
          </tr>)) }
      </tbody>

    );
  }
}

Table.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Table);
