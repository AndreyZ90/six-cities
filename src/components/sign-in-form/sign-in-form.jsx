import React from 'react';
import PropTypes from 'prop-types';

const SignInForm = (props) => {
  const {children, email, password, onButtonSubmit} = props;

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        onButtonSubmit(email, password);
      }}>
      {children}
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
};

SignInForm.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onButtonSubmit: PropTypes.func.isRequired
};

export default SignInForm;
