import React from 'react';
import PropTypes from 'prop-types';

const ReviewFromSubmit = (props) => {
  const {isValid} = props;

  return (
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
      <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
    </div>
  );
};

ReviewFromSubmit.propTypes = {
  isValid: PropTypes.bool.isRequired
};

export default ReviewFromSubmit;
