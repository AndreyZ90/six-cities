import React from 'react';
import PropTypes from 'prop-types';

import Header from '@/containers/header/header';
import CityList from '@/components/city-list/city-list';
import Main from '@/components/main/main';
import MainEmpty from '@/components/main-empty/main-empty';

import {HouseType, SortType} from '@/helpers/const';

const MainPage = (props) => {
  const {
    cities,
    currentCity
  } = props;

  const isEmpty = !cities.includes(currentCity);
  const classes = isEmpty ? `page__main page__main--index page__main--index-empty` : `page__main page__main--index`;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`${classes}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CityList
          cities={cities}
          currentCity={currentCity}
        />
        {isEmpty ? <MainEmpty city={currentCity}/> : <Main {...props}/>}
      </main>
    </div>
  );
};

MainPage.propTypes = {
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


export default MainPage;
