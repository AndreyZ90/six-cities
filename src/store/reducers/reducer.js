import {SortType} from '@/helpers/const';

import ActionType from '@/store/actions/const';

const initialState = {
  offerList: [],
  cityList: [],
  currentCity: null,
  currentSort: SortType.POPULAR,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_DATA_REQUEST:
      return Object.assign({}, state, {loading: true});
    case ActionType.FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {loading: false});
    case ActionType.FETCH_OFFERS_SUCCESS:
      return Object.assign({}, state, {offerList: action.payload});
    case ActionType.GET_CITIES:
      return Object.assign({}, state, {cityList: action.payload});
    case ActionType.SET_CURRENT_CITY:
      return Object.assign({}, state, {currentCity: action.payload});
    case ActionType.SET_CURRENT_SORT:
      return Object.assign({}, state, {currentSort: action.payload});
  }

  return state;
};

export default reducer;
