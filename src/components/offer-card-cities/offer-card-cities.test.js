import React from 'react';
import TestRenderer from 'react-test-renderer';

import OfferCardCities from '@/components/offer-card-cities/offer-card-cities';

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

describe(`OfferCardCities component snapshot`, () => {
  test(`Should correctly render OfferCardCities component`, () => {
    const tree = TestRenderer.create(
        <OfferCardCities
          offer={offer}
          onTitleClick={() => {}}
          onActiveCardChange={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});