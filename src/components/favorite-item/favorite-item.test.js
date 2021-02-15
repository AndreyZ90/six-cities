import React from 'react';
import TestRenderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import FavoriteItem from '@/components/favorite-item/favorite-item';

const city = `Amsterdam`;
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

const mockStore = configureMockStore([]);
const store = mockStore({
  user: {
    authStatus: `AUTH`
  }
});

describe(`FavoriteItem component snapshot`, () => {
  test(`Should correctly render FavoriteItem component`, () => {
    const tree = TestRenderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <FavoriteItem city={city} offers={offers} />
          </MemoryRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
