import React from 'react';
import TestRenderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import SortItem from '@/components/sort-item/sort-item';

const item = `Popular`;
const currentCity = `Amsterdam`;

describe(`SortItem component snapshot`, () => {
  test(`Should correctly render SortItem component (active)`, () => {
    const tree = TestRenderer.create(
        <Router>
          <SortItem item={item} isActive={true} currentCity={currentCity} onFlagChange={() => {}} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render SortItem component (not active)`, () => {
    const tree = TestRenderer.create(
        <Router>
          <SortItem item={item} isActive={false} currentCity={currentCity} onFlagChange={() => {}} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
