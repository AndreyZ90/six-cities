import React from 'react';
import TestRenderer from 'react-test-renderer';

import GalleryItem from '@/components/gallery-item/gallery-item';

const src = `img/hotel.jpg`;

describe(`GalleryItem component snapshot`, () => {
  test(`Should correctly render GalleryItem component`, () => {
    const tree = TestRenderer.create(<GalleryItem src={src} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
