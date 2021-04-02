import React from 'react';
import TestRenderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import FavoritesPage from '@/pages/favorites-page/favorites-page.jsx';

const mockStore = configureStore([]);

const store = mockStore({
  user: {
    email: `test@gmail.com`,
    authStatus: `AUTH`
  }
});

const offers = {
  'Amsterdam': [
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
  ]
};

describe(`FavoritesPage component snapshot`, () => {
  test(`Should correctly render FavoritesPage component (default)`, () => {
    const tree = TestRenderer.create(
        <MemoryRouter>
          <Provider store={store}>
            <FavoritesPage offers={offers} />
          </Provider>
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render FavoritesPage component (empty)`, () => {
    const tree = TestRenderer.create(
        <MemoryRouter>
          <Provider store={store}>
            <FavoritesPage offers={{}} />
          </Provider>
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
