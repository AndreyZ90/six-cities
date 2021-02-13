import React from 'react';
import PropTypes from 'prop-types';

const ReviewFormTextArea = (props) => {
  const {text, onTextChange} = props;

  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      value={text}
      onChange={(evt) => onTextChange(evt.target.name, evt.target.value)}
    />
  );
};

ReviewFormTextArea.propTypes = {
  text: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired
};

export default ReviewFormTextArea;
