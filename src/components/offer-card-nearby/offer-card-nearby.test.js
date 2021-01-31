import React from 'react';
import TestRenderer from 'react-test-renderer';

import OfferCardNearby from '@/components/offer-card-nearby/offer-card-nearby';

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

describe(`OfferCardNearby component snapshot`, () => {
  test(`Should correctly render OfferCardNearby component`, () => {
    const tree = TestRenderer.create(
        <OfferCardNearby
          offer={offer}
          onTitleClick={() => {}}
          onActiveCardChange={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
