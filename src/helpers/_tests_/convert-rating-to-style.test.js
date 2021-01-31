import {convertRatingToStyle} from '@/helpers/common';

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
