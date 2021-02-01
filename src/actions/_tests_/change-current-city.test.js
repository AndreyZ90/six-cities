import {changeCurrentCity} from '@/actions/action-creator';

describe(`ActionCreator - changeCurrentCity tests`, () => {
  test(`Should return object with right type (without payload)`, () => {
    expect(changeCurrentCity()).toEqual({
      type: `CHANGE_CURRENT_CITY`,
      payload: undefined
    });
  });

  test(`Should return object with right type (with payload)`, () => {
    expect(changeCurrentCity(`Moscow`)).toEqual({
      type: `CHANGE_CURRENT_CITY`,
      payload: `Moscow`
    });
  });
});
