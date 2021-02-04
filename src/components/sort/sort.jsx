import React from 'react';
import PropTypes from 'prop-types';

import SortItem from '@/components/sort-item/sort-item';

import withActiveFlag from '@/HOCs/with-active-flag/with-active-flag';

import {SortType} from '@/helpers/const';

const Sort = (props) => {
  const {currentSort, onCurrentSortChange, isActiveFlag, onFlagChange} = props;

  const activeClass = isActiveFlag ? `places__options--opened` : ``;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onFlagChange}>
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${activeClass}`}>
        {Object.values(SortType).map((item) => (
          <SortItem
            key={item}
            item={item}
            isActive={currentSort === item}
            onCurrentSortChange={onCurrentSortChange}
            onFlagChange={onFlagChange}
          />
        ))}
      </ul>
    </form>
  );
};

Sort.propTypes = {
  currentSort: PropTypes.oneOf(Object.values(SortType)).isRequired,
  onCurrentSortChange: PropTypes.func.isRequired,
  isActiveFlag: PropTypes.bool.isRequired,
  onFlagChange: PropTypes.func.isRequired
};

export {Sort};
export default withActiveFlag(Sort);

