import React from 'react';
import TestRenderer from 'react-test-renderer';

import PremiumMarkDetails from '@/components/premium-mark-details/premium-mark-details';

describe(`PremiumMarkDetails component snapshot`, () => {
  test(`Should correctly render PremiumMarkDetails component`, () => {
    const tree = TestRenderer.create(<PremiumMarkDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
