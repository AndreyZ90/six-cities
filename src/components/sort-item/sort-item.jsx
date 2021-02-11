import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AppRoute} from '@/helpers/const';

const SortItem = (props) => {
  const {item, isActive, onFlagChange, currentCity} = props;

  const activeClass = isActive ? `places__option--active` : ``;

  return (
    <Link to={`${AppRoute.MAIN}${currentCity.toLowerCase()}?sort=${item}`}>
      <li
        className={`places__option ${activeClass}`}
        tabIndex={0}
        onClick={() => onFlagChange()}
      >
        {item}
      </li>
    </Link>
  );
};

SortItem.propTypes = {
  item: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  currentCity: PropTypes.string.isRequired,
  onFlagChange: PropTypes.func.isRequired
};

export default SortItem;
