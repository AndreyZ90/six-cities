import {getGeoCoords} from '@/helpers/common';

const offers = [
  {
    location: {
      latitude: 23.12,
      longitude: 51.45
    }
  }
];

const offer = {
  location: {
    latitude: 23.12,
    longitude: 51.45
  }
};

describe(`getGeoCoords unit test`, () => {
  test(`Should correctly return with args (type: Array)`, () => {
    expect(getGeoCoords(offers)).toEqual([[23.12, 51.45]]);
  });

  test(`Should correctly return with args (type: Object)`, () => {
    expect(getGeoCoords(offer)).toEqual([23.12, 51.45]);
  });

  test(`Should correctly return with args (type: Object (null))`, () => {
    expect(getGeoCoords(null)).toEqual([]);
  });

  test(`Should correctly return with args (type: Any (string))`, () => {
    expect(getGeoCoords(`some string`)).toEqual([]);
  });

  test(`Should correctly return with args (type: Any (number))`, () => {
    expect(getGeoCoords(777)).toEqual([]);
  });
});
