import React from 'react';
import TestRenderer from 'react-test-renderer';

import BookmarkButton from '@/components/bookmark-button/bookmark-button';

import {ClassPrefix} from '@/helpers/const';

describe(`BookmarkButton component snapshot`, () => {
  test(`Should correctly render BookmarkButton component (default)`, () => {
    const tree = TestRenderer.create(<BookmarkButton isActive={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render BookmarkButton component (with prefix CARD)`, () => {
    const tree = TestRenderer.create(
        <BookmarkButton isActive={true} classPrefix={ClassPrefix.CARD} size={[18, 19]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render BookmarkButton component (with prefix DETAILS)`, () => {
    const tree = TestRenderer.create(
        <BookmarkButton isActive={true} classPrefix={ClassPrefix.DETAILS} size={[31, 33]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render BookmarkButton component (active)`, () => {
    const tree = TestRenderer.create(<BookmarkButton isActive={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render BookmarkButton component (not active)`, () => {
    const tree = TestRenderer.create(<BookmarkButton isActive={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
