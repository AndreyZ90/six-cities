import React from 'react';
import TestRenderer from 'react-test-renderer';

import ReviewFormTextarea from '@/components/review-form-textarea/review-form-textarea';

describe(`ReviewFormTextarea component snapshot`, () => {
  test(`Should correctly render ReviewFormTextarea component`, () => {
    const tree = TestRenderer.create(
        <ReviewFormTextarea text={`Hello world`} onTextChange={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
