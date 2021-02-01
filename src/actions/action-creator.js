import {GET_OFFERS, CHANGE_CURRENT_CITY} from '@/actions/const';

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

export {getOffers, changeCurrentCity};
