import React from 'react';
import PropTypes from 'prop-types';

import Header from '@/containers/header/header';

const SignIn = (props) => {
  const {email, password, onDataChange, onButtonSubmit} = props;

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={(evt) => {
                evt.preventDefault();
                onButtonSubmit(email, password);
              }}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email" name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(evt) => onDataChange(evt.target.name, evt.target.value)}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password" name="password"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(evt) => onDataChange(evt.target.name, evt.target.value)}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onDataChange: PropTypes.func.isRequired,
  onButtonSubmit: PropTypes.func.isRequired
};

export default SignIn;