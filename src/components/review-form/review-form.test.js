import React from 'react';
import TestRenderer from 'react-test-renderer';

import {ReviewForm} from '@/components/review-form/review-form';

describe(`ReviewForm component snapshot`, () => {
  test(`Should correctly render ReviewForm component`, () => {
    const tree = TestRenderer.create(
        <ReviewForm
          id={1}
          review={`Hello world`}
          rating={5}
          isValid={false}
          onValueChange={() => {}}
          onFormSubmit={() => {}}
          onFormClear={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
