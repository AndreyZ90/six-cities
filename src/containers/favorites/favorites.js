import {connect} from 'react-redux';

import Favorites from '@/components/favorites/favorites';

import Selector from '@/store/selectors/selector';

const mapStateToProps = (state) => {
  return {
    offers: Selector.getFavoritesOffers(state)
  };
};

export default connect(mapStateToProps)(Favorites);
