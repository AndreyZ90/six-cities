import React from 'react';
import PropTypes from 'prop-types';

import Header from '@/containers/header/header';
import CityList from '@/components/city-list/city-list';
import Places from '@/components/places/places';
import Sort from '@/components/sort/sort';
import OfferListCities from '@/components/offer-list-cities/offer-list-cities';
import MapCities from '@/components/map-cities/map-cities';

import {HouseType, SortType} from '@/helpers/const';
import {getGeoCoords, getOffersBySort} from '@/helpers/common';

const Main = (props) => {
  const {
    offers,
    cities,
    currentCity,
    onTitleClick,
    onCurrentCityChange,
    currentSort,
    onCurrentSortChange,
    activeItem,
    onActiveItemChange
  } = props;

  const geoCoords = getGeoCoords(offers.filter((offer) => offer.id !== activeItem));
  const cityCoords = getGeoCoords(offers[0].city);
  const activeGeoCoords = getGeoCoords(offers.find((offer) => offer.id === activeItem));
  const zoom = offers[0].city.location.zoom;

  const sortedOffers = getOffersBySort(offers, currentSort);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList
          cities={cities}
          currentCity={currentCity}
          onCurrentCityChange={onCurrentCityChange}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <Places count={sortedOffers.length} currentCity={currentCity}>
              <Sort currentSort={currentSort} onCurrentSortChange={onCurrentSortChange} />
              <OfferListCities
                offers={sortedOffers}
                onTitleClick={onTitleClick}
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
      </main>
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
  onTitleClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCity: PropTypes.string.isRequired,
  onCurrentCityChange: PropTypes.func.isRequired,
  currentSort: PropTypes.oneOf(Object.values(SortType)).isRequired,
  onCurrentSortChange: PropTypes.func.isRequired,
  activeItem: PropTypes.number.isRequired,
  onActiveItemChange: PropTypes.func.isRequired
};


export default Main;
