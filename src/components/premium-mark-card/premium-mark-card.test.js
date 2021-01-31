import React from 'react';
import TestRenderer from 'react-test-renderer';

import PremiumMarkCard from '@/components/premium-mark-card/premium-mark-card';

describe(`PremiumMarkCard component snapshot`, () => {
  test(`Should correctly render PremiumMarkCard component`, () => {
    const tree = TestRenderer.create(<PremiumMarkCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
