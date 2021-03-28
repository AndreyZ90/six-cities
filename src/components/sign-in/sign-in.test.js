import React from 'react';
import TestRenderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import SignIn from '@/components/sign-in/sign-in';

const email = `test@gmail.com`;
const password = `qwerty`;
const city = `Amsterdam`;

describe(`SignIn component snapshot`, () => {
  test(`Should correctly render SignIn component`, () => {
    const tree = TestRenderer.create(
        <MemoryRouter>
          <SignIn
            email={email}
            password={password}
            city={city}
            onDataChange={() => {}}
            onButtonSubmit={() => {}}
          />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
