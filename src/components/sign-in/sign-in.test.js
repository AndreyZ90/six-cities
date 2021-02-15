import React from 'react';
import TestRenderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import SignIn from '@/components/sign-in/sign-in';

const mockStore = configureStore([]);

const email = `test@gmail.com`;
const password = `qwerty`;

const store = mockStore({
  user: {
    email: `test@gmail.com`,
    authStatus: `AUTH`
  }
});

describe(`SignIn component snapshot`, () => {
  test(`Should correctly render SignIn component`, () => {
    const tree = TestRenderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <SignIn
              email={email}
              password={password}
              onDataChange={() => {}}
              onButtonSubmit={() => {}}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
