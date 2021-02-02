import {getOffersBySort} from '@/helpers/common';
import {SortType} from '@/helpers/const';

const offers = [{rating: 2, price: 100}, {rating: 1.3, price: 120}];

describe(`getOffersBySort unit test`, () => {
  test(`Should correctly return with sort - Popular`, () => {
    expect(getOffersBySort(offers, SortType.POPULAR)).toEqual([{rating: 2, price: 100}, {rating: 1.3, price: 120}]);
  });

  test(`Should correctly return with sort - Low to high`, () => {
    expect(getOffersBySort(offers, SortType.LOW_TO_HIGH)).toEqual([{rating: 2, price: 100}, {rating: 1.3, price: 120}]);
  });

  test(`Should correctly return with sort - High to low`, () => {
    expect(getOffersBySort(offers, SortType.HIGH_TO_LOW)).toEqual([{rating: 1.3, price: 120}, {rating: 2, price: 100}]);
  });

  test(`Should correctly return with sort - Top Rated`, () => {
    expect(getOffersBySort(offers, SortType.TOP_RATED)).toEqual([{rating: 2, price: 100}, {rating: 1.3, price: 120}]);
  });
});
