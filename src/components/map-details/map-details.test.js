import React from 'react';
import TestRenderer from 'react-test-renderer';
import leaflet from 'leaflet';

import MapDetails from '@/components/map-details/map-details';

leaflet.map = () => {};

const geoCoords = [[23.1, 22.6], [12.9, 30.1]];
const center = [89.21, 78.12];
const zoom = 10;

describe(`MapDetails component snapshot`, () => {
  test(`Should correctly render MapDetails component`, () => {
    const tree = TestRenderer.create(
        <MapDetails
          geoCoords={geoCoords}
          center={center}
          zoom={zoom}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
