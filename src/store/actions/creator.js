import ActionType from '@/store/actions/const';

const ActionCreator = {
  fetchDataRequest: () => ({
    type: ActionType.FETCH_DATA_REQUEST,
    payload: null
  }),

  fetchDataSuccess: () => ({
    type: ActionType.FETCH_DATA_SUCCESS,
    payload: null
  }),

  fetchOffersSuccess: (payload) => ({
    type: ActionType.FETCH_OFFERS_SUCCESS,
    payload
  }),

  setCities: (payload) => ({
    type: ActionType.SET_CITIES,
    payload
  }),

  setCurrentCity: (payload) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload
  }),

  setCurrentSort: (payload) => ({
    type: ActionType.SET_CURRENT_SORT,
    payload
  }),

  fetchLoginSuccess: (payload) => ({
    type: ActionType.FETCH_LOGIN_SUCCESS,
    payload
  }),

  fetchLoginFailure: (payload) => ({
    type: ActionType.FETCH_LOGIN_FAILURE,
    payload
  }),

  fetchOffersNearbySuccess: (payload) => ({
    type: ActionType.FETCH_OFFERS_NEARBY_SUCCESS,
    payload
  }),

  fetchReviewsSuccess: (payload) => ({
    type: ActionType.FETCH_REVIEWS_SUCCESS,
    payload
  }),
};

export default ActionCreator;
