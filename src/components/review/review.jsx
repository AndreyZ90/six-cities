import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  const {count, children} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{count}</span></h2>
      {children}
    </section>

  );
};

Review.propTypes = {
  count: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Review;
