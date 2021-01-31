import React from 'react';
import TestRenderer from 'react-test-renderer';

import PremiumMark from '@/components/premium-mark/premium-mark';

import {ClassPrefix} from '@/helpers/const';

describe(`PremiumMark component snapshot`, () => {
  test(`Should correctly render PremiumMark component (default)`, () => {
    const tree = TestRenderer.create(<PremiumMark />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render PremiumMark component (with prefix CARD)`, () => {
    const tree = TestRenderer.create(<PremiumMark classPrefix={ClassPrefix.CARD} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render PremiumMark component (with prefix DETAILS)`, () => {
    const tree = TestRenderer.create(<PremiumMark classPrefix={ClassPrefix.DETAILS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
