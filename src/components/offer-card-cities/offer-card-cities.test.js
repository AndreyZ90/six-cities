import React from 'react';
import TestRenderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import OfferCardCities from '@/components/offer-card-cities/offer-card-cities';

const mockStore = configureMockStore([]);

const store = mockStore({
  user: {
    authStatus: `AUTH`
  }
});

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
        <Provider store={store}>
          <Router>
            <OfferCardCities
              offer={offer}
              onActiveCardChange={() => {}}
            />
          </Router>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
