import React from 'react';
import TestRenderer from 'react-test-renderer';

import SignInForm from '@/components/sign-in-form/sign-in-form';

const childrenNode = <div className="some-children-node">Inside children node</div>;
const email = `test@gmail.com`;
const password = `qwerty`;

describe(`SignInForm component snapshot`, () => {
  test(`Should correctly render SignInForm component`, () => {
    const tree = TestRenderer.create(
        <SignInForm email={email} password={password} onButtonSubmit={() => {}}>
          {childrenNode}
        </SignInForm>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
