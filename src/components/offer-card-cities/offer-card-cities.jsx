import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '@/components/offer-card/offer-card';

import {HouseType} from '@/helpers/const';

const OfferCardCities = (props) => {
  return <OfferCard className="cities__place-card" {...props} />;
};

OfferCardCities.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(HouseType)).isRequired
  }).isRequired,
  onActiveCardChange: PropTypes.func
};

export default OfferCardCities;
