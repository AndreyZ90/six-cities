import React from 'react';
import TestRenderer from 'react-test-renderer';

import InsideList from '@/components/inside-list/inside-list';

const goods = [`Wi-Fi`, `Kitchen`];

describe(`InsideList component snapshot`, () => {
  test(`Should correctly render InsideList component`, () => {
    const tree = TestRenderer.create(<InsideList goods={goods} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
