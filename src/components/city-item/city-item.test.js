import React from 'react';
import TestRenderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import CityItem from '@/components/city-item/city-item';

const city = `Amsterdam`;

describe(`CityItem component snapshot`, () => {
  test(`Should correctly render CityItem component (active)`, () => {
    const tree = TestRenderer.create(
        <Router>
          <CityItem city={city} isActive={true} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render CityItem component (not active)`, () => {
    const tree = TestRenderer.create(
        <Router>
          <CityItem city={city} isActive={false} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
