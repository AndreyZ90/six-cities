import React from 'react';
import PropTypes from 'prop-types';

import Price from '@/components/price/price';

import {ClassPrefix} from '@/helpers/const';

const PriceCard = (props) => {
  return <Price classPrefix={ClassPrefix.CARD} {...props} />;
};

PriceCard.propTypes = {
  price: PropTypes.number.isRequired
};

export default PriceCard;
