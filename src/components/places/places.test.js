import React from 'react';
import TestRenderer from 'react-test-renderer';

import Places from '@/components/places/places';

const count = 10;
const childrenNode = <div className="some-children-node">Places children node</div>;

describe(`Places component snapshot`, () => {
  test(`Should correctly render Places component`, () => {
    const tree = TestRenderer.create(
        <Places count={count}>
          {childrenNode}
        </Places>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
