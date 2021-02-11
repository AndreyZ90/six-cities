import React from 'react';
import PropTypes from 'prop-types';

import Header from '@/containers/header/header';
import Footer from '@/components/footer/footer';
import FavoriteList from '../favorite-list/favorite-list';

const Favorites = (props) => {
  const {offers} = props;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList offers={offers} />
          </section>
        </div>
      </main>
      <Footer />
    </div>

  );
};

Favorites.propTypes = {
  offers: PropTypes.object.isRequired
};

export default Favorites;
