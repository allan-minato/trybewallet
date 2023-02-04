import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData, fetchAllInfo } from '../redux/actions';

class WalletForm extends Component {
  INITIAL_STATE = {
    value: '',
    description: '',
  };

  state = {
    id: 0,
    method: 'Dinheiro',
    tag: 'Alimentação',
    currency: 'USD',
    description: '',
    value: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchData());
  }

  resetState = () => {
    this.setState(this.INITIAL_STATE);
  };

  // handleClick = async () => {
  //   const { dispatch } = this.props;
  //   const { id,
  //     method, tag, currency, description, value } = this.state;
  //   const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  //   const data = await response.json();
  //   this.setState({ exchangeRates: data });
  //   dispatch(updateExpenses({
  //     id, method, tag, currency, description, value, exchangeRates: data,
  //   }));

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({
  //     [name]: value,
  //   });
  // };
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     value: '',
  //     description: '',
  //     method: 'Dinheiro',
  //     tag: 'Alimentação',
  //     currency: 'USD',
  //     exchangeRates: {},
  //     id: prevState.id + 1,
  //   }));
  // };
  setValue = ({ target }) => this.setState({ value: target.value });

  setdescription = ({ target }) => this.setState({ description: target.value });

  setCurrency = ({ target }) => this.setState({ currency: target.value });

  setPagamento = ({ target }) => this.setState({ method: target.value });

  setTag = ({ target }) => this.setState({ tag: target.value });

  handleClick = () => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      delete newState.expenses;

      const { dispatch } = this.props;
      dispatch(fetchAllInfo(newState));
    });
    this.resetState();
  };

  render() {
    const { method, tag, currency, description, value } = this.state;

    const { currencies } = this.props;
    return (
      <div>
        <h3>
          WalletForm
        </h3>
        <form id="walletForm">
          <ul>
            <input
              onChange={ this.setValue }
              name="value"
              data-testid="value-input"
              value={ value }
            />
            Valor das despesas
            <br />
            <input
              onChange={ this.setdescription }
              type="text"
              name="description"
              data-testid="description-input"
              value={ description }
            />
            descrição da despesas
            <br />
            <select
              onChange={ this.setCurrency }
              data-testid="currency-input"
              name="currency"
              value={ currency }
            >
              {currencies.map((coin, index) => (
                <option key={ index }>
                  { coin }
                </option>
              ))}
            </select>
            <br />
            <select
              onChange={ this.setPagamento }
              data-testid="method-input"
              name="method"
              value={ method }
            >
              <option
                name="Dinheiro"
                value="Dinheiro"
              >
                Dinheiro
              </option>
              <option
                name="Cartão de crédito"
                value="Cartão de crédito"
              >
                Cartão de crédito
              </option>
              <option
                name="Cartão de débito"
                value="Cartão de débito"
              >
                Cartão de débito
              </option>
            </select>
            <br />
            <select
              onChange={ this.setTag }
              data-testid="tag-input"
              name="tag"
              value={ tag }
            >
              <option
                name="Alimentação"
                value="Alimentação"
              >
                Alimentação
              </option>
              <option
                name="lazer"
                value="Lazer"
              >
                Lazer
              </option>
              <option
                name="Trabalho"
                value="Trabalho"
              >
                Trabalho
              </option>
              <option
                name="Transporte"
                value="Transporte"
              >
                Transporte
              </option>
              <option
                name="Saúde"
                value="Saúde"
              >
                Saúde
              </option>
            </select>
          </ul>
          <button
            onClick={ this.handleClick }
            type="button"
          >
            Adicionar despesas
          </button>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});
export default connect(mapStateToProps)(WalletForm);
