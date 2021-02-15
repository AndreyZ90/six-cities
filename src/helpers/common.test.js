import {convertRatingToStyle} from '@/helpers/common';
import {getGeoCoords} from '@/helpers/common';
import {getOffersBySort} from '@/helpers/common';

import {SortType} from '@/helpers/const';

const offersWithLocationData = [
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

const offersWithSortData = [{rating: 2, price: 100}, {rating: 1.3, price: 120}];

describe(`convertRatingToStyle unit tests`, () => {
  test(`Should correctly return with rating 0.9`, () => {
    expect(convertRatingToStyle(0.9)).toBe(20);
  });

  test(`Should correctly return with rating 1.2`, () => {
    expect(convertRatingToStyle(1.2)).toBe(20);
  });

  test(`Should correctly return with rating 1.7`, () => {
    expect(convertRatingToStyle(1.7)).toBe(40);
  });

  test(`Should correctly return with rating 3.4`, () => {
    expect(convertRatingToStyle(3.4)).toBe(60);
  });

  test(`Should correctly return with rating 4.4`, () => {
    expect(convertRatingToStyle(4.4)).toBe(80);
  });

  test(`Should correctly return with rating 4.9`, () => {
    expect(convertRatingToStyle(4.9)).toBe(100);
  });
});

describe(`getGeoCoords unit test`, () => {
  test(`Should correctly return with args (type: Array)`, () => {
    expect(getGeoCoords(offersWithLocationData)).toEqual([[23.12, 51.45]]);
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

describe(`getOffersBySort unit test`, () => {
  test(`Should correctly return with sort - Popular`, () => {
    expect(getOffersBySort(offersWithSortData, SortType.POPULAR)).toEqual([{rating: 2, price: 100}, {rating: 1.3, price: 120}]);
  });

  test(`Should correctly return with sort - Low to high`, () => {
    expect(getOffersBySort(offersWithSortData, SortType.LOW_TO_HIGH)).toEqual([{rating: 2, price: 100}, {rating: 1.3, price: 120}]);
  });

  test(`Should correctly return with sort - High to low`, () => {
    expect(getOffersBySort(offersWithSortData, SortType.HIGH_TO_LOW)).toEqual([{rating: 1.3, price: 120}, {rating: 2, price: 100}]);
  });

  test(`Should correctly return with sort - Top Rated`, () => {
    expect(getOffersBySort(offersWithSortData, SortType.TOP_RATED)).toEqual([{rating: 2, price: 100}, {rating: 1.3, price: 120}]);
  });
});
