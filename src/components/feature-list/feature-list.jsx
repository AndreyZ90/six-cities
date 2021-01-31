import React from 'react';
import PropTypes from 'prop-types';
import {HouseType} from '@/helpers/const';

const FeatureList = (props) => {
  const {type, bedrooms, maxAdults} = props;

  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {HouseType[type]}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {`${bedrooms} Bedrooms`}
      </li>
      <li className="property__feature property__feature--adults">
        {`Max ${maxAdults} adults`}
      </li>
    </ul>
  );
};

FeatureList.propTypes = {
  type: PropTypes.oneOf(Object.keys(HouseType)).isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired
};

export default FeatureList;
