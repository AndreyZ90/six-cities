import React from 'react';
import TestRenderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import OfferListCities from '@/components/offer-list-cities/offer-list-cities';

const mockStore = configureMockStore([]);

const store = mockStore({
  user: {
    authStatus: `AUTH`
  }
});

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
        <Provider store={store}>
          <MemoryRouter>
            <OfferListCities
              offers={offers}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
