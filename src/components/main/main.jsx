import React from 'react';
import PropTypes from 'prop-types';

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
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
