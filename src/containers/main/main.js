import {connect} from 'react-redux';
import {compose} from 'redux';

import Main from '@/components/main/main';

import withActiveItem from '@/HOCs/with-active-item/with-active-item';

import ActionCreator from '@/store/actions/creator';
import Selector from '@/store/selectors/selector';

const mapStateToProps = (state, {currentCity}) => {
  const city = currentCity ? `${currentCity[0].toUpperCase()}${currentCity.slice(1)}` : Selector.getCities(state)[0];

  return {
    cities: Selector.getCities(state),
    currentCity: city,
    currentSort: Selector.getCurrentSort(state),
    offers: Selector.getOffersByCurrentCity(state, city)
  };
};

const mapDispatchToProps = {
  onCurrentSortChange: ActionCreator.setCurrentSort
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withActiveItem
)(Main);
