import React from 'react';
import TestRenderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import OfferList from '@/components/offer-list/offer-list';

import {ClassPrefix} from '@/helpers/const';

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
  test(`Should correctly render OfferList component (default)`, () => {
    const tree = TestRenderer.create(
        <Router>
          <OfferList
            offers={offers}
            onActiveCardChange={() => {}}
          />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render OfferList component (with prefix CITY)`, () => {
    const tree = TestRenderer.create(
        <Router>
          <OfferList
            offers={offers}
            classPrefix={ClassPrefix.CITY}
            onActiveCardChange={() => {}}
          />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render OfferList component (with prefix NEARBY)`, () => {
    const tree = TestRenderer.create(
        <Router>
          <OfferList
            offers={offers}
            classPrefix={ClassPrefix.NEARBY}
            onActiveCardChange={() => {}}
          />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
