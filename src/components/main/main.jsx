import React from 'react';
import PropTypes from 'prop-types';

import Places from '@/components/places/places';
import Sort from '@/components/sort/sort';
import OfferListCities from '@/components/offer-list-cities/offer-list-cities';
import MapCities from '@/components/map-cities/map-cities';

import {HouseType, SortType} from '@/helpers/const';
import {getGeoCoords, getOffersBySort} from '@/helpers/common';

const Main = (props) => {
  const {
    offers,
    currentCity,
    currentSort,
    activeItem,
    onActiveItemChange
  } = props;

  const geoCoords = getGeoCoords(offers.filter((offer) => offer.id !== activeItem));
  const cityCoords = getGeoCoords(offers[0].city);
  const activeGeoCoords = getGeoCoords(offers.find((offer) => offer.id === activeItem));
  const zoom = offers[0].city.location.zoom;

  const sortedOffers = getOffersBySort(offers, currentSort);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <Places count={sortedOffers.length} currentCity={currentCity}>
          <Sort currentSort={currentSort} currentCity={currentCity} />
          <OfferListCities
            offers={sortedOffers}
            onActiveCardChange={onActiveItemChange}
          />
        </Places>
        <div className="cities__right-section">
          <MapCities
            geoCoords={geoCoords}
            activeGeoCoords={activeGeoCoords}
            center={cityCoords}
            zoom={zoom}
          />
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(HouseType)).isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
      }).isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  })).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCity: PropTypes.string.isRequired,
  currentSort: PropTypes.oneOf(Object.values(SortType)).isRequired,
  activeItem: PropTypes.number.isRequired,
  onActiveItemChange: PropTypes.func.isRequired
};


export default Main;
