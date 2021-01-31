import React from 'react';
import TestRenderer from 'react-test-renderer';

import PriceCard from '@/components/price-card/price-card';

const price = 300;

describe(`PriceCard component snapshot`, () => {
  test(`Should correctly render PriceCard component`, () => {
    const tree = TestRenderer.create(<PriceCard price={price} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
