import React from 'react';
import TestRenderer from 'react-test-renderer';

import Review from '@/components/review/review';

const count = 10;
const childrenNode = <div className="some-children-node">Review children node</div>;

describe(`Review component snapshot`, () => {
  test(`Should correctly render Review component`, () => {
    const tree = TestRenderer.create(
        <Review count={count}>
          {childrenNode}
        </Review>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
