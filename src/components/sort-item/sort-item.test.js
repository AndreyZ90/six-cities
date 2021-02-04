import React from 'react';
import TestRenderer from 'react-test-renderer';

import SortItem from '@/components/sort-item/sort-item';

const item = `Popular`;

describe(`SortItem component snapshot`, () => {
  test(`Should correctly render SortItem component (active)`, () => {
    const tree = TestRenderer.create(
        <SortItem item={item} isActive={true} onCurrentSortChange={() =>{}} onFlagChange={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render SortItem component (not active)`, () => {
    const tree = TestRenderer.create(
        <SortItem item={item} isActive={false} onCurrentSortChange={() =>{}} onFlagChange={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
