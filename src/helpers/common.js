import {SortType} from "@/helpers/const";

const convertRatingToStyle = (rating) => {
  const maxStars = 5;
  const maxPercent = 100;
  const step = maxPercent / maxStars;

  return rating < 1 ? step : Math.round(rating) * step;
};

const getGeoCoords = (data) => {
  if (data instanceof Array) {
    return data.map(({location}) => [location.latitude, location.longitude]);
  }

  if (!(data instanceof Array) && data instanceof Object) {
    if (!data) {
      return [];
    }

    return [data.location.latitude, data.location.longitude];
  }

  return [];
};

const getOffersBySort = (offers, sortType) => {
  switch (sortType) {
    case SortType.POPULAR:
      return [...offers];
    case SortType.LOW_TO_HIGH:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortType.HIGH_TO_LOW:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return [...offers].sort((a, b) => b.rating - a.rating);
  }

  return offers;
};

export {
  convertRatingToStyle,
  getGeoCoords,
  getOffersBySort
};
