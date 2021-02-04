import React from 'react';
import PropTypes from 'prop-types';

const SortItem = (props) => {
  const {item, isActive, onCurrentSortChange, onFlagChange} = props;

  const activeClass = isActive ? `places__option--active` : ``;

  return (
    <li
      className={`places__option ${activeClass}`}
      tabIndex={0}
      onClick={() => {
        onCurrentSortChange(item);
        onFlagChange();
      }}>
      {item}
    </li>);
};

SortItem.propTypes = {
  item: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onCurrentSortChange: PropTypes.func.isRequired,
  onFlagChange: PropTypes.func.isRequired
};

export default SortItem;
