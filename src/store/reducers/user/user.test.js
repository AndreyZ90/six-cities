import reducer from '@/store/reducers/user/user';

import {AuthStatus} from '@/helpers/const';

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  email: ``
};

describe(`User reducer tests`, () => {
  test(`Should return initialState`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  test(`Should change authStatus and email (with action - FETCH_LOGIN_SUCCESS)`, () => {
    expect(
        reducer(initialState, {type: `FETCH_LOGIN_SUCCESS`, payload: {email: `email@gmail.com`, authStatus: AuthStatus.AUTH}})
    ).toEqual(
        Object.assign({}, initialState, {email: `email@gmail.com`, authStatus: AuthStatus.AUTH})
    );
  });

  test(`Should change authStatus and email (with action - FETCH_LOGIN_FAILURE)`, () => {
    expect(
        reducer(initialState, {type: `FETCH_LOGIN_SUCCESS`, payload: {email: ``, authStatus: AuthStatus.NO_AUTH}})
    ).toEqual(
        Object.assign({}, initialState, {email: ``, authStatus: AuthStatus.NO_AUTH})
    );
  });
});
