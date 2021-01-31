import React from 'react';
import TestRenderer from 'react-test-renderer';

import Rating from '@/components/rating/rating';

import {ClassPrefix} from '@/helpers/const';

describe(`Rating component snapshot`, () => {
  test(`Should correctly render Rating component (default)`, () => {
    const tree = TestRenderer.create(<Rating rating={0.9} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render Rating component (with prefix CARD)`, () => {
    const tree = TestRenderer.create(<Rating rating={1.6} classPrefix={ClassPrefix.CARD} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render Rating component (with prefix DETAILS)`, () => {
    const tree = TestRenderer.create(<Rating rating={3.2} classPrefix={ClassPrefix.DETAILS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render Rating component (with prefix REVIEWS)`, () => {
    const tree = TestRenderer.create(<Rating rating={4.5} classPrefix={ClassPrefix.REVIEWS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
