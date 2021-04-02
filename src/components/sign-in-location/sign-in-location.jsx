import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {AppRoute} from '@/helpers/const';

const SignInLocation = (props) => {
  const {city} = props;

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link to={`${AppRoute.MAIN}${city.toLowerCase()}`} className="locations__item-link">
          <span>{city}</span>
        </Link>
      </div>
    </section>
  );
};

SignInLocation.propTypes = {
  city: PropTypes.string.isRequired
};

export default SignInLocation;
