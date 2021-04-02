import {connect} from 'react-redux';

import FavoritesPage from '@/pages/favorites-page/favorites-page';

import Selector from '@/store/selectors/selector';

const mapStateToProps = (state) => {
  return {
    offers: Selector.getFavoritesOffers(state)
  };
};

export default connect(mapStateToProps)(FavoritesPage);
