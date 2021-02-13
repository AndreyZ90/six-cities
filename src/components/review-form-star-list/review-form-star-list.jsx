import React from 'react';
import PropTypes from 'prop-types';

import ReviewFormStarItem from '@/components/review-form-star-item/review-form-star-item';

import {RatingType} from '@/helpers/const';

const ReviewFormStarList = (props) => {
  const {currentRating, onRatingChange} = props;

  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(RatingType).map(([title, rating]) => (
        <ReviewFormStarItem
          key={title}
          rating={rating}
          title={title}
          currentRating={currentRating}
          onRatingChange={onRatingChange}
        />
      ))}
    </div>
  );
};

ReviewFormStarList.propTypes = {
  currentRating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired
};

export default ReviewFormStarList;
