import React from 'react';
import PropTypes from 'prop-types';

import Rating from '@/components/rating/rating';

import {ClassPrefix} from '@/helpers/const';

const RatingDetails = (props) => {
  return <Rating classPrefix={ClassPrefix.DETAILS} {...props} />;
};

RatingDetails.propTypes = {
  rating: PropTypes.number.isRequired
};

export default RatingDetails;
