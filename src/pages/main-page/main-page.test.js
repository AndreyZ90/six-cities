import React from 'react';
import TestRenderer from 'react-test-renderer';
import leaflet from 'leaflet';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MainPage from '@/pages/main-page/main-page';

leaflet.map = () => {};

const mockStore = configureStore([]);
const store = mockStore({
  user: {
    email: `test@gmail.com`,
    authStatus: `NO_AUTH`
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
    type: `apartment`,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`, `img/room.jpg`],
    bedrooms: 3,
    maxAdults: 6,
    goods: [`Heating`, `Kitchen`, `Cable TV`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
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
    images: [`img/apartment-03.jpg`, `img/apartment-02.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`, `img/room.jpg`],
    bedrooms: 1,
    maxAdults: 2,
    goods: [`Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 2,
      isPro: false,
      name: `Nadezhda`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Moscow.`,
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

const cities = [`Amsterdam`, `Cologne`, `Brussels`, `Hamburg`, `Dusseldorf`];
const currentCity = `Amsterdam`;
const currentSort = `Popular`;

describe(`MainPage component snapshot`, () => {
  test(`Should correctly render MainPage component (default)`, () => {
    const tree = TestRenderer.create(
        <MemoryRouter>
          <Provider store={store}>
            <MainPage
              offers={offers}
              cities={cities}
              currentCity={currentCity}
              currentSort={currentSort}
              activeItem={-1}
              onActiveItemChange={() => {}}
            />
          </Provider>
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render MainPage component (empty)`, () => {
    const tree = TestRenderer.create(
        <MemoryRouter>
          <Provider store={store}>
            <MainPage
              offers={offers}
              cities={cities}
              currentCity={`Moscow`}
              currentSort={currentSort}
              activeItem={-1}
              onActiveItemChange={() => {}}
            />
          </Provider>
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
