import React, {memo} from 'react';
import PropTypes from 'prop-types';

const CityItem = (props) => {
  const {city, isActive, onCurrentCityChange} = props;

  const activeClass = isActive ? `tabs__item--active` : ``;

  return (
    <li className="locations__item" onClick={() => onCurrentCityChange(city)}>
      <a className={`locations__item-link tabs__item ${activeClass}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onCurrentCityChange: PropTypes.func.isRequired
};

export default memo(CityItem);
