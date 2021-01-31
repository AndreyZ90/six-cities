import React from 'react';
import TestRenderer from 'react-test-renderer';

import BookmarkButtonCard from '@/components/bookmark-button-card/bookmark-button-card';

describe(`BookmarkButtonCard component snapshot`, () => {
  test(`Should correctly render BookmarkButtonCard component (active)`, () => {
    const tree = TestRenderer.create(<BookmarkButtonCard isActive={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render BookmarkButtonCard component (not active)`, () => {
    const tree = TestRenderer.create(<BookmarkButtonCard isActive={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
