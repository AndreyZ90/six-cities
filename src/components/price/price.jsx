import React from 'react';
import PropTypes from 'prop-types';

import {ClassPrefix} from '@/helpers/const';

const Price = (props) => {
  const {price, classPrefix} = props;

  return (
    <div className={`${classPrefix}__price`}>
      <b className={`${classPrefix}__price-value`}>€{price}</b>
      {ClassPrefix.CARD === classPrefix && <span className={`${classPrefix}__price-text`}> /&nbsp;night</span>}
      {ClassPrefix.DETAILS === classPrefix && <span className={`${classPrefix}__price-text`}> &nbsp;night</span>}
    </div>
  );
};

Price.defaultProps = {
  classPrefix: ClassPrefix.CARD
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
  classPrefix: PropTypes.oneOf(Object.values(ClassPrefix))
};

export default Price;
