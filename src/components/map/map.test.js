import React from 'react';
import TestRenderer from 'react-test-renderer';
import leaflet from 'leaflet';

import Map from '@/components/map/map';

leaflet.map = () => {};

const geoCoords = [[23.1, 22.6], [12.9, 30.1]];
const center = [89.21, 78.12];
const zoom = 10;

describe(`Map component snapshot`, () => {
  test(`Should correctly render Map component`, () => {
    const tree = TestRenderer.create(
        <Map
          geoCoords={geoCoords}
          center={center}
          zoom={zoom}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});