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

  getCities: (payload) => ({
    type: ActionType.GET_CITIES,
    payload
  }),

  setCurrentCity: (payload) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload
  }),

  setCurrentSort: (payload) => ({
    type: ActionType.SET_CURRENT_SORT,
    payload
  })
};

export default ActionCreator;
