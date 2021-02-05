import {createSelector} from 'reselect';

const Selector = {
  getOffers: (state) => state.offerList,
  getCities: (state) => state.cityList,
  getCurrentCity: (state) => state.currentCity,
  getCurrentSort: (state) => state.currentSort,
  getOffersByCurrentCity: createSelector(
      (state) => state.offerList,
      (state) => state.currentCity,
      (offers, city) => offers.filter((offer) => offer.city.name === city)
  )
};

export default Selector;
