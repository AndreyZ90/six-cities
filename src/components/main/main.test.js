import React from 'react';
import TestRenderer from 'react-test-renderer';

import Main from '@/components/main/main';

const offers = [
  {
    id: 1,
    isFavorite: true,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.9,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    id: 2,
    isFavorite: true,
    isPremium: false,
    previewImage: `img/apartment-02.jpg`,
    price: 99,
    rating: 3.6,
    title: `Wood and stone place`,
    type: `room`
  }
];

describe(`Main component snapshot`, () => {
  test(`Should correctly render Main component`, () => {
    const tree = TestRenderer.create(
        <Main offers={offers} onTitleClick={() => {}}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
