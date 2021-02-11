import ActionCreator from '@/store/actions/creator';
import Adapter from '@/helpers/adapter';

import {AuthStatus} from '@/helpers/const';

const Operation = {
  fetchOffersRequest: () => (dispatch, _getState, api) => {
    return api.get(`hotels`)
      .then(({data}) => {
        const offers = Adapter.offers(data);

        dispatch(ActionCreator.fetchOffersSuccess(offers));

        return offers;
      });
  },

  fetchLoginRequestGet: () => (dispatch, _getstate, api) => {
    return api.get(`login`)
        .then(({data}) => dispatch(ActionCreator.fetchLoginSuccess({authStatus: AuthStatus.AUTH, email: data.email})))
        .catch(() => dispatch(ActionCreator.fetchLoginFailure({authStatus: AuthStatus.NO_AUTH, email: ``})));
  },

  fetchLoginRequestPost: (email, password) => (dispatch, _getState, api) => {
    return api.post(`login`, {email, password})
      .then(({data}) => dispatch(ActionCreator.fetchLoginSuccess({authStatus: AuthStatus.AUTH, email: data.email})))
      .catch(() => dispatch(ActionCreator.fetchLoginFailure({authStatus: AuthStatus.NO_AUTH, email: ``})));
  },

  fetchOffersNearbyRequest: (id) => (dispatch, _getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then(({data}) => {
        const offersNearby = Adapter.offers(data);

        dispatch(ActionCreator.fetchOffersNearbySuccess(offersNearby));

        return offersNearby;
      });
  },

  fetchReviewsRequest: (id) => (dispatch, _getState, api) => {
    return api.get(`/comments/${id}`)
      .then(({data}) => {
        const reviews = Adapter.reviews(data);

        dispatch(ActionCreator.fetchReviewsSuccess(reviews));

        return reviews;
      });
  },

  fetchFavoritesRequest: (id, status) => (dispatch, _getState, api) => {
    return api.post(`favorite/${id}/${status}`)
      .then(({data}) => {
        const offer = Adapter.offer(data);

        dispatch(ActionCreator.fetchFavotiresSuccess(offer));

        return offer;
      });
  }
};

export default Operation;
