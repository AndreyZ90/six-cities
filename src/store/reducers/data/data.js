import ActionType from '@/store/actions/const';

import {SortType} from '@/helpers/const';

const initialState = {
  offerList: [],
  cityList: [],
  currentCity: null,
  currentSort: SortType.POPULAR
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_OFFERS_SUCCESS:
      return Object.assign({}, state, {offerList: action.payload});
    case ActionType.SET_CITIES:
      return Object.assign({}, state, {cityList: action.payload});
    case ActionType.SET_CURRENT_CITY:
      return Object.assign({}, state, {currentCity: action.payload});
    case ActionType.SET_CURRENT_SORT:
      return Object.assign({}, state, {currentSort: action.payload});
  }

  return state;
};

export default reducer;
