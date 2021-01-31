import React from 'react';

import PremiumMark from '@/components/premium-mark/premium-mark';

import {ClassPrefix} from '@/helpers/const';

const PremiumMarkCard = (props) => {
  return <PremiumMark classPrefix={ClassPrefix.CARD} {...props} />;
};

export default PremiumMarkCard;
