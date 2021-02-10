import React from 'react';
import TestRenderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import {Sort} from '@/components/sort/sort';

const currentSort = `Popular`;
const currentCity = `Amsterdam`;

describe(`Sort component snapshot`, () => {
  test(`Should correctly render Sort component`, () => {
    const tree = TestRenderer.create(
        <Router>
          <Sort
            currentSort={currentSort}
            isActiveFlag={false}
            currentCity={currentCity}
            onFlagChange={() => {}}
          />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
