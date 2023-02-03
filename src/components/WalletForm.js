import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions/apiFetch';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchData());
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    if (!currencies) {
      return <p>Carregando...</p>;
    }
    return (
      <div>
        <h3>
          WalletForm
        </h3>
        <form id="walletForm">
          <ul>
            <li data-testid="value-input">
              Valor das despesas
            </li>
            <li data-testid="description-input">
              descrição da despesa
            </li>
            <select
              data-testid="currency-input"
              name="select"
            >
              {currencies.map((coin, index) => (
                <option key={ index }>
                  { coin }
                </option>
              ))}
            </select>
            <br />
            <select
              data-testid="method-input"
              name="select"
            >
              <option value="valor1">
                Dinheiro
              </option>
              <option value="valor1">
                Cartão de crédito
              </option>
              <option value="valor1">
                Cartão de débito
              </option>
            </select>
            <br />
            <select
              data-testid="tag-input"
              name="select"
            >
              <option value="valor1">
                Alimentação
              </option>
              <option value="valor1">
                Lazer
              </option>
              <option value="valor1">
                Trabalho
              </option>
              <option value="valor1">
                Transporte
              </option>
              <option value="valor1">
                Saúde
              </option>
            </select>
          </ul>

        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => {
  console.log();
  return {
    ...state.wallet,
  };
};
export default connect(mapStateToProps)(WalletForm);
