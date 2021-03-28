import React from 'react';
import PropTypes from 'prop-types';

import SignInForm from '../sign-in-form/sign-in-form';
import SignInInput from '../sign-in-input/sign-in-input';
import SignInLocation from '@/components/sign-in-location/sign-in-location';

const SignIn = (props) => {
  const {email, password, onDataChange, city, onButtonSubmit} = props;

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <SignInForm email={email} password={password} onButtonSubmit={onButtonSubmit}>
            <SignInInput type="email" label="E-mail" onDataChange={onDataChange} />
            <SignInInput type="password" label="Password" onDataChange={onDataChange} />
          </SignInForm>
        </section>
        <SignInLocation city={city} />
      </div>
    </main>
  );
};

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onDataChange: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  onButtonSubmit: PropTypes.func.isRequired
};

export default SignIn;
