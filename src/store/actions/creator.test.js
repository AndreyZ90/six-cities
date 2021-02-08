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
    expect(ActionCreator.setCities([`Moscow`, `London`])).toEqual({
      type: `SET_CITIES`,
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

  test(`Should return right action (FETCH_LOGIN_SUCCESS)`, () => {
    expect(ActionCreator.fetchLoginSuccess({email: `test@gmail.com`, authStatus: `AUTH`})).toEqual({
      type: `FETCH_LOGIN_SUCCESS`,
      payload: {
        email: `test@gmail.com`,
        authStatus: `AUTH`
      }
    });
  });

  test(`Should return right action (FETCH_LOGIN_FAILURE)`, () => {
    expect(ActionCreator.fetchLoginFailure({email: ``, authStatus: `NO_AUTH`})).toEqual({
      type: `FETCH_LOGIN_FAILURE`,
      payload: {email: ``, authStatus: `NO_AUTH`}
    });
  });
});
