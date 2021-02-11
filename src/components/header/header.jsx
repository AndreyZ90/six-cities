import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {AppRoute, AuthStatus} from '@/helpers/const';

const Header = (props) => {
  const {email, authStatus} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.MAIN} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="{81}" height="{41}" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authStatus === AuthStatus.AUTH && (
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{email}</span>
                  </Link>
                )}
                {authStatus === AuthStatus.NO_AUTH && (
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.LOGIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  authStatus: PropTypes.oneOf(Object.values(AuthStatus)).isRequired
};

export default Header;
