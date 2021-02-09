const Selector = {
  getOffers: (state) => state.data.offerList,
  getCities: (state) => state.data.cityList,
  getCurrentCity: (state) => state.data.currentCity,
  getCurrentSort: (state) => state.data.currentSort,
  getLoading: (state) => state.app.loading,
  getOffersByCurrentCity: (state, currentCity) => state.data.offerList.filter((offer) => offer.city.name === currentCity),
  getEmail: (state) => state.user.email,
  getAuthStatus: (state) => state.user.authStatus,
  getOfferById: (state, id) => state.data.offerList.find((offer) => offer.id === id),
  getOffersNearby: (state) => state.data.offerNearbyList,
  getReviews: (state) => state.data.reviewList
};

export default Selector;
