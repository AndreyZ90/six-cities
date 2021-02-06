import {connect} from 'react-redux';

import App from '@/components/app/app';

import Selector from '@/store/selectors/selector';

const mapStateToProps = (state) => {
  return {
    offers: Selector.getOffers(state),
    loading: Selector.getLoading(state)
  };
};

export default connect(mapStateToProps)(App);
