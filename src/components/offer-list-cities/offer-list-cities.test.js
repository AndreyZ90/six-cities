import React from 'react';
import TestRenderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import OfferListCities from '@/components/offer-list-cities/offer-list-cities';

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

describe(`OfferListCities component snapshot`, () => {
  test(`Should correctly render OfferListCities component`, () => {
    const tree = TestRenderer.create(
        <Router>
          <OfferListCities
            offers={offers}
          />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
