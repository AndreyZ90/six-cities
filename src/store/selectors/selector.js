import {createSelector} from 'reselect';

const Selector = {
  getOffers: (state) => state.data.offerList,
  getCities: (state) => state.data.cityList,
  getCurrentCity: (state) => state.data.currentCity,
  getCurrentSort: (state) => state.data.currentSort,
  getLoading: (state) => state.app.loading,
  getOffersByCurrentCity: createSelector(
      (state) => state.data.offerList,
      (state) => state.data.currentCity,
      (offers, city) => offers.filter((offer) => offer.city.name === city)
  ),
  getEmail: (state) => state.user.email,
  getAuthStatus: (state) => state.user.authStatus
};

export default Selector;
