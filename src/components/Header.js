import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
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
          Despesa total: 0
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
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
