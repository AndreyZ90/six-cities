import React from 'react';
import TestRenderer from 'react-test-renderer';

import BookmarkButtonDetails from '@/components/bookmark-button-details/bookmark-button-details';

describe(`BookmarkButtonDetails component snapshot`, () => {
  test(`Should correctly render BookmarkButtonDetails component (active)`, () => {
    const tree = TestRenderer.create(<BookmarkButtonDetails isActive={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render BookmarkButtonDetails component (not active)`, () => {
    const tree = TestRenderer.create(<BookmarkButtonDetails isActive={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
