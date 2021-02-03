import {GET_OFFERS, CHANGE_CURRENT_CITY, CHANGE_CURRENT_SORT} from '@/actions/const';

const getOffers = () => {
  return {
    type: GET_OFFERS,
    payload: null
  };
};

const changeCurrentCity = (payload) => {
  return {
    type: CHANGE_CURRENT_CITY,
    payload
  };
};

const changeCurrentSort = (payload) => {
  return {
    type: CHANGE_CURRENT_SORT,
    payload
  };
};

export {getOffers, changeCurrentCity, changeCurrentSort};
