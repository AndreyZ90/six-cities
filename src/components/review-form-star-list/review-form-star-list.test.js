import React from 'react';
import TestRenderer from 'react-test-renderer';

import ReviewFormStarList from '@/components/review-form-star-list/review-form-star-list';

describe(`ReviewFormStarList component snapshot`, () => {
  test(`Should correctly render ReviewFormStarList component`, () => {
    const tree = TestRenderer.create(
        <ReviewFormStarList currentRating={5} onRatingChange={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
