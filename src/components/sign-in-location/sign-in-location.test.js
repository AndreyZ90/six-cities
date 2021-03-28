import React from 'react';
import TestRenderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import SignInLocation from '@/components/sign-in-location/sign-in-location';

const city = `Amsterdam`;

describe(`SignInLocation component snapshot`, () => {
  test(`Should correctly render SignInLocation component`, () => {
    const tree = TestRenderer.create(
        <MemoryRouter>
          <SignInLocation city={city} />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
