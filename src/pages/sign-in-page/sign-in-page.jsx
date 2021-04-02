import React from 'react';
import PropTypes from 'prop-types';

import Header from '@/containers/header/header';
import SignIn from '@/components/sign-in/sign-in';

const SignInPage = (props) => {
  return (
    <div className="page page--gray page--login">
      <Header />
      <SignIn {...props}/>
    </div>
  );
};

SignInPage.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onDataChange: PropTypes.func.isRequired,
  onButtonSubmit: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

export default SignInPage;
