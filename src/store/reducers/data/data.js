import ActionType from '@/store/actions/const';

import {SortType} from '@/helpers/const';
import {updateOfferList} from '@/helpers/common';

const initialState = {
  offerList: [],
  offerNearbyList: [],
  cityList: [],
  reviewList: [],
  currentSort: SortType.POPULAR
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_OFFERS_SUCCESS:
      return Object.assign({}, state, {offerList: action.payload});
    case ActionType.SET_CITIES:
      return Object.assign({}, state, {cityList: action.payload});
    case ActionType.SET_CURRENT_SORT:
      return Object.assign({}, state, {currentSort: action.payload});
    case ActionType.FETCH_OFFERS_NEARBY_SUCCESS:
      return Object.assign({}, state, {offerNearbyList: action.payload});
    case ActionType.FETCH_REVIEWS_SUCCESS:
      return Object.assign({}, state, {reviewList: action.payload});
    case ActionType.FETCH_FAVORITES_SUCCESS:
      const offer = action.payload;
      const offerList = updateOfferList(offer, state.offerList);
      const offerNearbyList = updateOfferList(offer, state.offerNearbyList);

      return Object.assign({}, state, {offerList, offerNearbyList});
  }

  return state;
};

export default reducer;
