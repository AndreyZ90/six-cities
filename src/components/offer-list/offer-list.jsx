import React, {memo} from 'react';
import PropTypes from 'prop-types';

import OfferCard from '@/components/offer-card/offer-card';
import OfferCardCities from '@/components/offer-card-cities/offer-card-cities';
import OfferCardNearby from '@/components/offer-card-nearby/offer-card-nearby';

import {ClassPrefix, HouseType} from '@/helpers/const';

const getOfferByPrefix = (prefix, props) => {
  switch (prefix) {
    case ClassPrefix.CITY:
      return <OfferCardCities {...props} />;
    case ClassPrefix.NEARBY:
      return <OfferCardNearby {...props} />;
    default:
      return <OfferCard {...props} />;
  }
};

const OfferList = (props) => {
  const {offers, onActiveCardChange, className, classPrefix} = props;

  return (
    <div className={`${className} places__list`}>
      {offers.map((offer) => getOfferByPrefix(classPrefix, {
        key: offer.id,
        offer,
        onActiveCardChange
      }))}
    </div>
  );
};

OfferList.defaultProps = {
  className: ``
};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(HouseType)).isRequired
  })).isRequired,
  onActiveCardChange: PropTypes.func,
  className: PropTypes.string,
  classPrefix: PropTypes.oneOf(Object.values(ClassPrefix))
};

export default memo(OfferList);
