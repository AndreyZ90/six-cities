import ActionCreator from '@/store/actions/creator';
import Adapter from '@/helpers/adapter';

const Operation = {
  fetchOffersRequest: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.fetchDataRequest());

    return api.get(`hotels`)
      .then(({data}) => {
        const offers = Adapter.offers(data);
        const cities = [...new Set(offers.map(({city}) => city.name))];

        dispatch(ActionCreator.fetchOffersSuccess(offers));
        dispatch(ActionCreator.getCities(cities));
        dispatch(ActionCreator.setCurrentCity(cities[0]));

        dispatch(ActionCreator.fetchDataSuccess());
      });
  }
};

export default Operation;
