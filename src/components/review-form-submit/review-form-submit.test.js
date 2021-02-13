import React from 'react';
import TestRenderer from 'react-test-renderer';

import ReviewFormSubmit from '@/components/review-form-submit/review-form-submit';

describe(`ReviewFormSubmit component snapshot`, () => {
  test(`Should correctly render ReviewFormSubmit component (default)`, () => {
    const tree = TestRenderer.create(
        <ReviewFormSubmit isValid={false} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render ReviewFormSubmit component (active)`, () => {
    const tree = TestRenderer.create(
        <ReviewFormSubmit isValid={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
