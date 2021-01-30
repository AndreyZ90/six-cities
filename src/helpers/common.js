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

export {convertRatingToStyle, getGeoCoords};
