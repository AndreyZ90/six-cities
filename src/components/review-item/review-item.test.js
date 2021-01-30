import React from 'react';
import TestRenderer from 'react-test-renderer';

import ReviewItem from '@/components/review-item/review-item';

const item = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2020-05-08T14:22:35.569Z`,
  id: 1,
  rating: 2.3,
  user: {
    avatarUrl: `img/avatar-max.jpg`,
    id: 1,
    isPro: false,
    name: `Vladimir`
  }
};

const itemIsPro = Object.assign({}, item, {user: Object.assign({}, item.user, {isPro: true})});

describe(`ReviewItem component snapshot`, () => {
  test(`Should correctly render ReviewItem component (default)`, () => {
    const tree = TestRenderer.create(<ReviewItem {...item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render ReviewItem component (active)`, () => {
    const tree = TestRenderer.create(<ReviewItem {...itemIsPro}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
