import React from 'react';
import PropTypes from 'prop-types';

import Header from '@/containers/header/header';
import Favorites from '@/components/favorites/favorites';
import FavoritesEmpty from '@/components/favorites-empty/favorites-empty';
import Footer from '@/components/footer/footer';

const FavoritesPage = (props) => {
  const {offers} = props;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {Object.keys(offers).length === 0 ? <FavoritesEmpty /> : <Favorites offers={offers}/>}
        </div>
      </main>
      <Footer />
    </div>
  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.object.isRequired
};

export default FavoritesPage;
