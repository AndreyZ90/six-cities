import React from 'react';
import TestRenderer from 'react-test-renderer';

import ReviewList from '@/components/review-list/review-list';

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

describe(`ReviewList component snapshot`, () => {
  test(`Should correctly render ReviewList component`, () => {
    const tree = TestRenderer.create(<ReviewList reviews={reviews} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
