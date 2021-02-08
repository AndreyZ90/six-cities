const ApiConfig = {
  baseURL: `https://4.react.pages.academy/six-cities`,
  timeout: 5000
};

const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const ClassPrefix = {
  CARD: `place-card`,
  CITY: `cities`,
  DETAILS: `property`,
  REVIEWS: `reviews`,
  NEARBY: `near-places`
};

const HouseType = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

const MapPin = {
  src: `/img/pin.svg`,
  size: [30, 40]
};

const MapPinActive = {
  src: `/img/pin-active.svg`,
  size: [30, 40]
};

const SortType = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export {
  ApiConfig,
  AuthStatus,
  ClassPrefix,
  HouseType,
  MapPin,
  MapPinActive,
  SortType
};
