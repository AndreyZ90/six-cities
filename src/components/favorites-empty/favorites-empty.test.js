import React from 'react';
import TestRenderer from 'react-test-renderer';

import FavoritesEmpty from '@/components/favorites-empty/favorites-empty';

describe(`FavoritesEmpty component snapshot`, () => {
  test(`Should correctly render FavoritesEmpty component`, () => {
    const tree = TestRenderer.create(<FavoritesEmpty />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
