import React from 'react';
import TestRenderer from 'react-test-renderer';

import Sort from '@/components/sort/sort';

const currentSort = `Popular`;

describe(`Sort component snapshot`, () => {
  test(`Should correctly render Sort component`, () => {
    const tree = TestRenderer.create(
        <Sort currentSort={currentSort} onCurrentSortChange={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
