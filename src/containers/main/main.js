import {connect} from 'react-redux';
import {compose} from 'redux';

import Main from '@/components/main/main';

import withActiveItem from '@/HOCs/with-active-item/with-active-item';

import {changeCurrentCity, changeCurrentSort} from '@/actions/action-creator';

const mapStateToProps = ({cityList, currentCity, currentSort}) => {
  return {
    cities: cityList,
    currentCity,
    currentSort
  };
};

const mapDispatchToProps = {
  onCurrentCityChange: changeCurrentCity,
  onCurrentSortChange: changeCurrentSort
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withActiveItem
)(Main);
