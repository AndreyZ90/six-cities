import React from 'react';
import TestRenderer from 'react-test-renderer';

import Nearby from '@/components/nearby/nearby';

const childrenNode = <div className="some-children-node">Nearby children node</div>;

describe(`Nearby component snapshot`, () => {
  test(`Should correctly render Nearby component`, () => {
    const tree = TestRenderer.create(
        <Nearby>
          {childrenNode}
        </Nearby>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
