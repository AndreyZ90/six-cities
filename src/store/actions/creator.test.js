import ActionCreator from '@/store/actions/creator';

describe(`ActionCreators tests`, () => {
  test(`Should return right action (FETCH_DATA_REQUEST)`, () => {
    expect(ActionCreator.fetchDataRequest()).toEqual({
      type: `FETCH_DATA_REQUEST`,
      payload: null
    });
  });

  test(`Should return right action (FETCH_DATA_SUCCESS)`, () => {
    expect(ActionCreator.fetchDataSuccess()).toEqual({
      type: `FETCH_DATA_SUCCESS`,
      payload: null
    });
  });

  test(`Should return right action (FETCH_OFFERS_SUCCESS)`, () => {
    expect(ActionCreator.fetchOffersSuccess([{type: `offer-1`}, {type: `offer-2`}])).toEqual({
      type: `FETCH_OFFERS_SUCCESS`,
      payload: [{type: `offer-1`}, {type: `offer-2`}]
    });
  });

  test(`Should return right action (GET_CITIES)`, () => {
    expect(ActionCreator.getCities([`Moscow`, `London`])).toEqual({
      type: `GET_CITIES`,
      payload: [`Moscow`, `London`]
    });
  });

  test(`Should return right action (SET_CURRENT_CITY)`, () => {
    expect(ActionCreator.setCurrentCity(`Moscow`)).toEqual({
      type: `SET_CURRENT_CITY`,
      payload: `Moscow`
    });
  });

  test(`Should return right action (SET_CURRENT_SORT)`, () => {
    expect(ActionCreator.setCurrentSort(`Popular`)).toEqual({
      type: `SET_CURRENT_SORT`,
      payload: `Popular`
    });
  });
});
