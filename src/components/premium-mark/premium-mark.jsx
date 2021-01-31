import React from 'react';
import PropTypes from 'prop-types';

import {ClassPrefix} from '@/helpers/const';

const PremiumMark = (props) => {
  const {classPrefix} = props;

  return (
    <div className={`${classPrefix}__mark`}>
      <span>Premium</span>
    </div>
  );
};

PremiumMark.defaultProps = {
  classPrefix: ClassPrefix.CARD
};

PremiumMark.propTypes = {
  classPrefix: PropTypes.oneOf(Object.values(ClassPrefix))
};

export default PremiumMark;
