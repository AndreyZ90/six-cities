import offers from '@/mocks/offers';
import {SortType} from '@/helpers/const';

const initialState = {
  offerList: offers,
  cityList: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  currentCity: `Amsterdam`,
  currentSort: SortType.POPULAR
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `GET_OFFERS`:
      return Object.assign({}, state);
    case `CHANGE_CURRENT_CITY`:
      return Object.assign({}, state, {currentCity: action.payload});
    case `CHANGE_CURRENT_SORT`:
      return Object.assign({}, state, {currentSort: action.payload});
  }

  return state;
};

export default reducer;
