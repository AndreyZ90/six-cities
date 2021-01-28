const convertRatingToStyle = (rating) => {
  const maxStars = 5;
  const maxPercent = 100;
  const step = maxPercent / maxStars;

  return rating < 1 ? step : Math.round(rating) * step;
};

export {convertRatingToStyle};
