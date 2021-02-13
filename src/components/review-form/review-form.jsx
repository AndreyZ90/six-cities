import React from 'react';
import PropTypes from 'prop-types';

import withValidationForm from '@/HOCs/with-validation-form/with-validation-form';

import ReviewFormStarList from '@/components/review-form-star-list/review-form-star-list';
import ReviewFormTextArea from '@/components/review-form-textarea/review-form-textarea';
import ReviewFormSubmit from '@/components/review-form-submit/review-form-submit';

const ReviewForm = (props) => {
  const {
    id,
    review,
    rating,
    isValid,
    onValueChange,
    onFormSubmit,
    onFormClear
  } = props;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        onFormSubmit(id, {comment: review, rating}).then(() => onFormClear());
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewFormStarList currentRating={rating} onRatingChange={onValueChange} />
      <ReviewFormTextArea text={review} onTextChange={onValueChange} />
      <ReviewFormSubmit isValid={isValid} />
    </form>
  );
};

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isValid: PropTypes.bool.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onFormClear: PropTypes.func.isRequired
};

export {ReviewForm};
export default withValidationForm(ReviewForm);
