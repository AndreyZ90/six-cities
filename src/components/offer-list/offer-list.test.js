import React from 'react';
import TestRenderer from 'react-test-renderer';

import OfferList from '@/components/offer-list/offer-list';

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

describe(`OfferList component snapshot`, () => {
  test(`Should correctly render OfferList component`, () => {
    const tree = TestRenderer.create(
        <OfferList
          offers={offers}
          onTitleClick={() => {}}
          onActiveCardChange={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
