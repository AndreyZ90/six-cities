import React from 'react';
import PropTypes from 'prop-types';

const ReviewFormStarItem = (props) => {
  const {title, rating, currentRating, onRatingChange} = props;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        id={`${rating}-star`}
        type="radio"
        value={rating}
        checked={rating === currentRating}
        onChange={(evt) => onRatingChange(evt.target.name, evt.target.value)}
      />
      <label htmlFor={`${rating}-star`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
};

ReviewFormStarItem.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  currentRating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired
};

export default ReviewFormStarItem;
