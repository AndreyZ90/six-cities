import React from 'react';
import TestRenderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import {Sort} from '@/components/sort/sort';

const currentSort = `Popular`;
const currentCity = `Amsterdam`;

describe(`Sort component snapshot`, () => {
  test(`Should correctly render Sort component`, () => {
    const tree = TestRenderer.create(
        <MemoryRouter>
          <Sort
            currentSort={currentSort}
            isActiveFlag={false}
            currentCity={currentCity}
            onFlagChange={() => {}}
          />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
