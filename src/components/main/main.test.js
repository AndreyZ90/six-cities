import React from 'react';
import TestRenderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import leaflet from 'leaflet';

import Main from '@/components/main/main';

leaflet.map = () => {};

const mockStore = configureStore([]);

const offers = [
  {
    id: 1,
    isFavorite: true,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.9,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10
      },
      name: `Amsterdam`
    }
  },
  {
    id: 2,
    isFavorite: true,
    isPremium: false,
    previewImage: `img/apartment-02.jpg`,
    price: 99,
    rating: 3.6,
    title: `Wood and stone place`,
    type: `room`,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10
      },
      name: `Amsterdam`
    }
  }
];

const cityList = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const currentCity = `Amsterdam`;
const currentSort = `Popular`;
const activeItem = -1;

const store = mockStore({
  user: {
    email: `test@gmail.com`,
    authStatus: `AUTH`
  }
});

describe(`Main component snapshot`, () => {
  test(`Should correctly render Main component`, () => {
    const tree = TestRenderer.create(
        <Provider store={store}>
          <Router>
            <Main
              offers={offers}
              cities={cityList}
              currentCity={currentCity}
              currentSort={currentSort}
              activeItem={activeItem}
              onCurrentSortChange={() => {}}
              onActiveItemChange={() => {}}
            />
          </Router>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
