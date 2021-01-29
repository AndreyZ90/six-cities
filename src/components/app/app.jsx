import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Main from '@/components/main/main';
import OfferDetails from '@/components/offer-details/offer-details';

import {HouseType} from '@/helpers/const';

const App = (props) => {
  const {offers, onTitleClick} = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main offers={offers} onTitleClick={onTitleClick} />
        </Route>
        <Route exact path="/dev-details">
          <OfferDetails {...offers[0]}/>
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(HouseType)).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    berdrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired,
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
  onTitleClick: PropTypes.func.isRequired
};

export default App;
