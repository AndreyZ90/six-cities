import {getOffers} from '@/actions/action-creator';

describe(`ActionCreator - getOffers tests`, () => {
  test(`Should return object with right type`, () => {
    expect(getOffers()).toEqual({
      type: `GET_OFFERS`,
      payload: null
    });
  });
});
