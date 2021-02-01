import React from 'react';
import TestRenderer from 'react-test-renderer';

import CityList from '@/components/city-list/city-list';

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const currentCity = `Amsterdam`;

describe(`CityList component snapshot`, () => {
  test(`Should correctly render CityList component`, () => {
    const tree = TestRenderer.create(
        <CityList cities={cities} currentCity={currentCity} onCurrentCityChange={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
