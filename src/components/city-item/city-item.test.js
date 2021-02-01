import React from 'react';
import TestRenderer from 'react-test-renderer';

import CityItem from '@/components/city-item/city-item';

const city = `Amsterdam`;

describe(`CityItem component snapshot`, () => {
  test(`Should correctly render CityItem component (active)`, () => {
    const tree = TestRenderer.create(
        <CityItem city={city} isActive={true} onCurrentCityChange={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render CityItem component (not active)`, () => {
    const tree = TestRenderer.create(
        <CityItem city={city} isActive={false} onCurrentCityChange={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
