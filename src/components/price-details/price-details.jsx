import React from 'react';
import PropTypes from 'prop-types';

import Price from '@/components/price/price';

import {ClassPrefix} from '@/helpers/const';

const PriceDetails = (props) => {
  return <Price classPrefix={ClassPrefix.DETAILS} {...props} />;
};

PriceDetails.propTypes = {
  price: PropTypes.number.isRequired
};

export default PriceDetails;
