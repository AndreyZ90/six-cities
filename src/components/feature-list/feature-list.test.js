import React from 'react';
import TestRenderer from 'react-test-renderer';

import FeatureList from '@/components/feature-list/feature-list';

describe(`FeatureList component snapshot`, () => {
  test(`Should correctly render FeatureList component (type: apartament)`, () => {
    const tree = TestRenderer.create(
        <FeatureList
          type={`apartment`}
          bedrooms={3}
          maxAdults={5}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render FeatureList component (type: house)`, () => {
    const tree = TestRenderer.create(
        <FeatureList
          type={`house`}
          bedrooms={3}
          maxAdults={5}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render FeatureList component (type: hotel)`, () => {
    const tree = TestRenderer.create(
        <FeatureList
          type={`hotel`}
          bedrooms={3}
          maxAdults={5}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render FeatureList component (type: apartament)`, () => {
    const tree = TestRenderer.create(
        <FeatureList
          type={`room`}
          bedrooms={3}
          maxAdults={5}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
