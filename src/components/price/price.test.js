import React from 'react';
import TestRenderer from 'react-test-renderer';

import Price from '@/components/price/price';

import {ClassPrefix} from '@/helpers/const';

const price = 300;

describe(`Price component snapshot`, () => {
  test(`Should correctly render Price component (default)`, () => {
    const tree = TestRenderer.create(<Price price={price} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render Price component (with prefix CARD)`, () => {
    const tree = TestRenderer.create(<Price price={price} classPrefix={ClassPrefix.CARD} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render Price component (with prefix DETAILS)`, () => {
    const tree = TestRenderer.create(<Price price={price} classPrefix={ClassPrefix.DETAILS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
