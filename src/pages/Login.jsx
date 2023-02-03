import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateEmail, updatePassword } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    userPassword: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { email, userPassword } = this.state;
    const { dispatch, history } = this.props;
    dispatch(updateEmail(email));
    dispatch(updatePassword(userPassword));
    history.push('/carteira');
  };

  validateLogin = () => {
    const maxLengthPass = 6;
    const loginRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const { email, userPassword } = this.state;

    if (userPassword.length < maxLengthPass || !loginRegex.test(email)) {
      return true;
    }
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <h3>Email:</h3>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          id="email-login"
          onChange={ this.handleChange }
        />
        <h3>Senha:</h3>
        <input
          data-testid="password-input"
          type="password"
          name="userPassword"
          id="password-login"
          minLength="6"
          onChange={ this.handleChange }
        />
        <br />
        <button
          type="submit"
          disabled={ this.validateLogin() }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   email: state.email,
//   userPassword: state.userPassword,
// });

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
