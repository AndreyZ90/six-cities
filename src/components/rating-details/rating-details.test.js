import React from 'react';
import TestRenderer from 'react-test-renderer';

import RatingDetails from '@/components/rating-details/rating-details';

describe(`RatingDetails component snapshot`, () => {
  test(`Should correctly render RatingDetails component`, () => {
    const tree = TestRenderer.create(<RatingDetails rating={4.1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
