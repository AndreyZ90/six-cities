import React from 'react';
import TestRenderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from '@/components/header/header';

import {AuthStatus} from '@/helpers/const';

const email = `test@gmail.com`;

describe(`Header component snapshot`, () => {
  test(`Should correctly render Header component (with AUTH status)`, () => {
    const tree = TestRenderer.create(
        <Router>
          <Header email={email} authStatus={AuthStatus.AUTH} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render Header component (with NO_AUTH status)`, () => {
    const tree = TestRenderer.create(
        <Router>
          <Header email={email} authStatus={AuthStatus.NO_AUTH} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
