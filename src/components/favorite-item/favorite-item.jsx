import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import OfferCard from '@/components/offer-card/offer-card';

import {AppRoute, HouseType} from '@/helpers/const';

const FavoriteItem = (props) => {
  const {city, offers} = props;

  return (
    <li className="favorites__locations-items" key={city}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={`${AppRoute.MAIN}${city.toLowerCase()}`}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <OfferCard key={offer.id} className={`favorites__card`} offer={offer} />)}
      </div>
    </li>
  );
};

FavoriteItem.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(HouseType)).isRequired,
  })).isRequired
};

export default FavoriteItem;
