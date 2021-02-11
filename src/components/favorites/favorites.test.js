import React from 'react';
import TestRenderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

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

const mockStore = configureMockStore([]);

const store = mockStore({
  user: {
    authStatus: `AUTH`,
    email: `test@gmail.com`
  }
});

import Favorites from '@/components/favorites/favorites';

describe(`Favorites component snapshot`, () => {
  test(`Should correctly render Favorites component`, () => {
    const tree = TestRenderer.create(
        <Provider store={store}>
          <Router>
            <Favorites offers={offers} />
          </Router>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
