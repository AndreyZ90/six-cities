import React from 'react';
import PropTypes from 'prop-types';

import OfferList from '@/components/offer-list/offer-list';

import {ClassPrefix, HouseType} from '@/helpers/const';

const OfferListNearby = (props) => {
  return <OfferList className="near-places__list" classPrefix={ClassPrefix.NEARBY} {...props} />;
};

OfferListNearby.propTypes = {
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
  onTitleClick: PropTypes.func.isRequired,
  onActiveCardChange: PropTypes.func
};

export default OfferListNearby;
