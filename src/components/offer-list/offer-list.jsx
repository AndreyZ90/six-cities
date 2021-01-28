import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '@/components/offer-card/offer-card';

import {HouseType} from '@/helpers/const';

const OfferList = (props) => {
  const {offers, onTitleClick, onActiveCardChange} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          onTitleClick={onTitleClick}
          onActiveCardChange={onActiveCardChange}
          {...offer}
        />
      ))}
    </div>
  );
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
  onTitleClick: PropTypes.func.isRequired,
  onActiveCardChange: PropTypes.func.isRequired
};

export default OfferList;
