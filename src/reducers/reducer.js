import offers from '@/mocks/offers.js';

const initialState = {
  offerList: offers,
  cityList: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  currentCity: `Amsterdam`
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `GET_OFFERS`:
      return Object.assign({}, state);
    case `CHANGE_CURRENT_CITY`:
      return Object.assign({}, state, {currentCity: action.payload});
  }

  return state;
};

export default reducer;
