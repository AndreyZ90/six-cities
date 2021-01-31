import React from 'react';
import PropTypes from 'prop-types';

import Rating from '@/components/rating/rating';

import {ClassPrefix} from '@/helpers/const';

const RatingReviews = (props) => {
  return <Rating classPrefix={ClassPrefix.REVIEWS} {...props} />;
};

RatingReviews.propTypes = {
  rating: PropTypes.number.isRequired
};

export default RatingReviews;
