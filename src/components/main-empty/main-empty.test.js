import React from 'react';
import TestRenderer from 'react-test-renderer';

import MainEmpty from '@/components/main-empty/main-empty';

const city = `Amsterdam`;

describe(`MainEmpty component snapshot`, () => {
  test(`Should correctly render MainEmpty component`, () => {
    const tree = TestRenderer.create(<MainEmpty city={city} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
