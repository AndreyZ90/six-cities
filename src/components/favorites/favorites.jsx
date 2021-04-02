import React from 'react';
import PropTypes from 'prop-types';

import FavoriteList from '@/components/favorite-list/favorite-list';

const Favorites = (props) => {
  const {offers} = props;

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoriteList offers={offers} />
    </section>
  );
};

Favorites.propTypes = {
  offers: PropTypes.object.isRequired
};

export default Favorites;
