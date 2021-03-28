import React from 'react';
import TestRenderer from 'react-test-renderer';

import Loading from '@/components/loading/loading';

describe(`Loading component snapshot`, () => {
  test(`Should correctly render Loading component`, () => {
    const tree = TestRenderer.create(<Loading/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
