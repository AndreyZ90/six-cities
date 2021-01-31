import React from 'react';
import TestRenderer from 'react-test-renderer';

import RatingReviews from '@/components/rating-reviews/rating-reviews';

describe(`RatingReviews component snapshot`, () => {
  test(`Should correctly render RatingReviews component`, () => {
    const tree = TestRenderer.create(<RatingReviews rating={2.2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
