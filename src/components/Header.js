import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  totalSum = () => {
    const { expenses } = this.props;
    const zero = 0;
    const totalSum = expenses.reduce((acc, curr) => {
      const eachExpenseValue = curr.value * curr.exchangeRates[curr.currency].ask;
      const sum = Number(eachExpenseValue) + parseFloat(acc);
      return sum.toFixed(2);
    }, zero.toFixed(2));
    return totalSum;
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">
          Email:
          {' '}
          {email}
        </span>
        <br />
        <span
          data-testid="total-field"
        >
          { this.totalSum() }
        </span>
        <br />
        <span data-testid="header-currency-field">
          Moeda: BRL
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

  ...state.user,
  email: state.user.email,
  expenses: state.wallet.expenses,
  currency: state.wallet.currency,

});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }),
}.isRequired;

export default connect(mapStateToProps)(Header);
