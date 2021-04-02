import React from 'react';
import TestRenderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import SignInPage from '@/pages/sign-in-page/sign-in-page';

const mockStore = configureStore([]);
const store = mockStore({
  user: {
    email: `test@gmail.com`,
    authStatus: `NO_AUTH`
  }
});

const city = `Paris`;
const email = `test@gmail.com`;
const password = `qwerty`;

describe(`SignInPage component snapshot`, () => {
  test(`Should correctly render SignInPage component`, () => {
    const tree = TestRenderer.create(
        <MemoryRouter>
          <Provider store={store}>
            <SignInPage
              city={city}
              email={email}
              password={password}
              onDataChange={() => {}}
              onButtonSubmit={() => {}}
            />
          </Provider>
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
