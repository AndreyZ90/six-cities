import {connect} from 'react-redux';
import {compose} from 'redux';

import Main from '@/components/main/main';

import withActiveItem from '@/HOCs/with-active-item/with-active-item';

import ActionCreator from '@/store/actions/creator';
import Selector from '@/store/selectors/selector';

const mapStateToProps = (state) => {
  return {
    cities: Selector.getCities(state),
    currentCity: Selector.getCurrentCity(state),
    currentSort: Selector.getCurrentSort(state),
    offers: Selector.getOffersByCurrentCity(state)
  };
};

const mapDispatchToProps = {
  onCurrentCityChange: ActionCreator.setCurrentCity,
  onCurrentSortChange: ActionCreator.setCurrentSort
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withActiveItem
)(Main);
