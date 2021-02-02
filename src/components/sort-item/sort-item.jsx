import React from 'react';
import PropTypes from 'prop-types';

const SortItem = (props) => {
  const {item, isActive, onCurrentSortChange} = props;

  const activeClass = isActive ? `places__option--active` : ``;

  return <li className={`places__option ${activeClass}`} tabIndex={0} onClick={() => onCurrentSortChange(item)}>{item}</li>;
};

SortItem.propTypes = {
  item: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onCurrentSortChange: PropTypes.func.isRequired
};

export default SortItem;
