
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
  }
};

export default Operation;
