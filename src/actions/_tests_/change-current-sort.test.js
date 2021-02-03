import {changeCurrentSort} from '@/actions/action-creator';

describe(`ActionCreator - changeCurrentSort tests`, () => {
  test(`Should return object with right type (without payload)`, () => {
    expect(changeCurrentSort(`Popular`)).toEqual({
      type: `CHANGE_CURRENT_SORT`,
      payload: `Popular`
    });
  });
});
