import React from 'react';
import TestRenderer from 'react-test-renderer';

import SignInInput from '@/components/sign-in-input/sign-in-input';

const type = `password`;
const label = `Password`;

describe(`SignInInput component snapshot`, () => {
  test(`Should correctly render SignInInput component`, () => {
    const tree = TestRenderer.create(
        <SignInInput
          type={type}
          label={label}
          onDataChange={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
