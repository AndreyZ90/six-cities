import React from 'react';
import PropTypes from 'prop-types';

import {ClassPrefix} from '@/helpers/const';
import {convertRatingToStyle} from '@/helpers/common';

const Rating = (props) => {
  const {rating, classPrefix} = props;

  return (
    <div className={`${classPrefix}__rating rating`}>
      <div className={`${classPrefix}__stars rating__stars`}>
        <span style={{width: `${convertRatingToStyle(rating)}%`}} />
        <span className="visually-hidden">Rating</span>
      </div>
      {ClassPrefix.DETAILS === classPrefix && <span className="property__rating-value rating__value">{rating}</span>}
    </div>
  );
};

Rating.defaultProps = {
  classPrefix: ClassPrefix.CARD
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  classPrefix: PropTypes.oneOf(Object.values(ClassPrefix))
};

export default Rating;
