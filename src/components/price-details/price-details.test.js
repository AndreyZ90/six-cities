import React from 'react';
import TestRenderer from 'react-test-renderer';

import PriceDetails from '@/components/price-details/price-details';

const price = 300;

describe(`PriceDetails component snapshot`, () => {
  test(`Should correctly render PriceDetails component`, () => {
    const tree = TestRenderer.create(<PriceDetails price={price} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
