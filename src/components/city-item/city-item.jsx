import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {AppRoute} from '@/helpers/const';

const CityItem = (props) => {
  const {city, isActive} = props;

  const activeClass = isActive ? `tabs__item--active` : ``;

  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${activeClass}`} to={`${AppRoute.MAIN}${city.toLowerCase()}`}>
        <span>{city}</span>
      </Link>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default memo(CityItem);
