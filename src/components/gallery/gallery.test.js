import React from 'react';
import TestRenderer from 'react-test-renderer';

import Gallery from '@/components/gallery/gallery';

const images = [`img/room.jpg`, `img/hotel.jpg`];

describe(`Gallery component snapshot`, () => {
  test(`Should correctly render Gallery component`, () => {
    const tree = TestRenderer.create(<Gallery images={images} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
