import React from 'react';
import TestRenderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import Header from '@/components/header/header';

import {AuthStatus} from '@/helpers/const';

const email = `test@gmail.com`;

describe(`Header component snapshot`, () => {
  test(`Should correctly render Header component (with AUTH status)`, () => {
    const tree = TestRenderer.create(
        <MemoryRouter>
          <Header email={email} authStatus={AuthStatus.AUTH} />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render Header component (with NO_AUTH status)`, () => {
    const tree = TestRenderer.create(
        <MemoryRouter>
          <Header email={email} authStatus={AuthStatus.NO_AUTH} />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
