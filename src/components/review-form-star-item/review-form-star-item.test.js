import React from 'react';
import TestRenderer from 'react-test-renderer';

import ReviewFormStarItem from '@/components/review-form-star-item/review-form-star-item';

describe(`ReviewFormStarItem component snapshot`, () => {
  test(`Should correctly render ReviewFormStarItem component (default)`, () => {
    const tree = TestRenderer.create(
        <ReviewFormStarItem
          rating={5}
          currentRating={4}
          title={`perfect`}
          onRatingChange={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render ReviewFormStarItem component (active)`, () => {
    const tree = TestRenderer.create(
        <ReviewFormStarItem
          rating={5}
          currentRating={5}
          title={`perfect`}
          onRatingChange={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
