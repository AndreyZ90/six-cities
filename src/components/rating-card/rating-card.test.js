import React from 'react';
import TestRenderer from 'react-test-renderer';

import RatingCard from '@/components/rating-card/rating-card';

describe(`RatingCard component snapshot`, () => {
  test(`Should correctly render RatingCard component`, () => {
    const tree = TestRenderer.create(<RatingCard rating={3.9} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
