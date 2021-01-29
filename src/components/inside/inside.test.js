import React from 'react';
import TestRenderer from 'react-test-renderer';

import Inside from '@/components/inside/inside';

const childrenNode = <div className="some-children-node">Inside children node</div>;

describe(`Inside component snapshot`, () => {
  test(`Should correctly render Inside component`, () => {
    const tree = TestRenderer.create(
        <Inside>
          {childrenNode}
        </Inside>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
