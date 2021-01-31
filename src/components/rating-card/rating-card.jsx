import React from 'react';
import PropTypes from 'prop-types';

import Rating from '@/components/rating/rating';

import {ClassPrefix} from '@/helpers/const';

const RatingCard = (props) => {
  return <Rating classPrefix={ClassPrefix.CARD} {...props} />;
};

RatingCard.propTypes = {
  rating: PropTypes.number.isRequired
};

export default RatingCard;
