import React from 'react';

import PremiumMark from '@/components/premium-mark/premium-mark';

import {ClassPrefix} from '@/helpers/const';

const PremiumMarkDetails = (props) => {
  return <PremiumMark classPrefix={ClassPrefix.DETAILS} {...props} />;
};

export default PremiumMarkDetails;
