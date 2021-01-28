import React from 'react';
import TestRenderer from 'react-test-renderer';

import OfferCard from '@/components/offer-card/offer-card';

const offer = {
  id: 1,
  isFavorite: true,
  isPremium: true,
  previewImage: `img/apartment-01.jpg`,
  price: 120,
  rating: 4.9,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
};

describe(`OfferCard component snapshot`, () => {
  test(`Should correctly render OfferCard component`, () => {
    const tree = TestRenderer.create(
        <OfferCard
          onTitleClick={() => {}}
          onActiveCardChange={() => {}}
          {...offer}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
