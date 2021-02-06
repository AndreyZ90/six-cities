
import ActionCreator from '@/store/actions/creator';
import Adapter from '@/helpers/adapter';

const Operation = {
  fetchOffersRequest: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.fetchDataRequest());

    return api.get(`hotels`)
      .then(({data}) => {
        const offers = Adapter.offers(data);

        dispatch(ActionCreator.fetchOffersSuccess(offers));

        return offers;
      });
  }
};

export default Operation;
