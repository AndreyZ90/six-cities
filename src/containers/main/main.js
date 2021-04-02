import {connect} from 'react-redux';
import {compose} from 'redux';

import MainPage from '@/pages/main-page/main-page';

import withActiveItem from '@/HOCs/with-active-item/with-active-item';

import Selector from '@/store/selectors/selector';

import {SortType} from '@/helpers/const';

const mapStateToProps = (state, {currentCity, currentSort}) => {
  const city = currentCity ? `${currentCity[0].toUpperCase()}${currentCity.slice(1)}` : Selector.getCities(state)[0];
  const searchParams = new URLSearchParams(currentSort);
  const sort = searchParams.get(`sort`) || SortType.POPULAR;

  return {
    cities: Selector.getCities(state),
    currentCity: city,
    currentSort: sort,
    offers: Selector.getOffersByCurrentCity(state, city)
  };
};

export default compose(
    connect(mapStateToProps),
    withActiveItem
)(MainPage);
