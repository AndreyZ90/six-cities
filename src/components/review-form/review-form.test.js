import React from 'react';
import TestRenderer from 'react-test-renderer';

import ReviewForm from '@/components/review-form/review-form';

describe(`ReviewForm component snapshot`, () => {
  test(`Should correctly render ReviewForm component`, () => {
    const tree = TestRenderer.create(<ReviewForm/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
