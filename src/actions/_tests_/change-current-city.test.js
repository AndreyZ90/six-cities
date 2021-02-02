import {changeCurrentCity} from '@/actions/action-creator';

describe(`ActionCreator - changeCurrentCity tests`, () => {
  test(`Should return object with right type`, () => {
    expect(changeCurrentCity(`Moscow`)).toEqual({
      type: `CHANGE_CURRENT_CITY`,
      payload: `Moscow`
    });
  });
});
