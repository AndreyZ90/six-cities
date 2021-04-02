import {connect} from 'react-redux';

import OfferDetailsPage from '@/pages/offer-details-page/offer-details-page';

import Operation from '@/store/actions/operation';
import Selector from '@/store/selectors/selector';

const mapStateToProps = (state, {id}) => {
  return {
    offer: Selector.getOfferById(state, id),
    nearby: Selector.getOffersNearby(state),
    reviews: Selector.getReviews(state),
    authStatus: Selector.getAuthStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => {
      dispatch(Operation.fetchOffersNearbyRequest(id));
      dispatch(Operation.fetchReviewsRequest(id));
    },
    onFormSubmit: (...args) => dispatch(Operation.fetchAddReviewRequest(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetailsPage);
