import React from 'react';
import TestRenderer from 'react-test-renderer';

import OfferDetails from '@/components/offer-details/offer-details';

const offer = {
  id: 1,
  isFavorite: true,
  isPremium: true,
  previewImage: `img/apartment-01.jpg`,
  price: 120,
  rating: 4.9,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`,
  images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`, `img/room.jpg`],
  berdrooms: 3,
  maxAdults: 6,
  goods: [`Heating`, `Kitchen`, `Cable TV`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    id: 1,
    isPro: true,
    name: `Angelina`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`
};

const reviews = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2020-05-08T14:22:35.569Z`,
    id: 1,
    rating: 2.3,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 1,
      isPro: true,
      name: `Vladimir`
    }
  },
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Berlin.`,
    date: `2019-01-06T12:13:51.569Z`,
    id: 2,
    rating: 3,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 2,
      isPro: false,
      name: `Max`
    }
  }
];

describe(`OfferDetails component snapshot`, () => {
  test(`Should correctly render OfferDetails component`, () => {
    const tree = TestRenderer.create(
        <OfferDetails
          reviews={reviews}
          {...offer}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
