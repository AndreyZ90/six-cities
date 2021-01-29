import React from 'react';
import TestRenderer from 'react-test-renderer';

import InsideItem from '@/components/inside-item/inside-item';

const item = `Wi-Fi`;

describe(`InsideItem component snapshot`, () => {
  test(`Should correctly render InsideItem component`, () => {
    const tree = TestRenderer.create(<InsideItem item={item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
