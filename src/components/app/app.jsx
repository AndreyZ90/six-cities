import React from 'react';
import PropTypes from 'prop-types';

import Main from '@/components/main/main';

import {HouseType} from '@/helpers/const';

const App = (props) => {
  const {offers, onTitleClick} = props;

  return <Main offers={offers} onTitleClick={onTitleClick} />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(HouseType)).isRequired,
  })).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default App;
