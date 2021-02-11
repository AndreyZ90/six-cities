import React from 'react';
import PropTypes from 'prop-types';

import FavoriteItem from '@/components/favorite-item/favorite-item';

const FavoriteList = (props) => {
  const {offers} = props;

  return (
    <ul className="favorites__list">
      {Object.entries(offers).map(([city, offerList]) => <FavoriteItem key={city} city={city} offers={offerList} />)}
    </ul>
  );
};

FavoriteList.propTypes = {
  offers: PropTypes.object.isRequired
};

export default FavoriteList;
