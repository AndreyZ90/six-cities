import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Loading from '@/components/loading/loading';

import MainPage from '@/containers/main/main';
import OfferDetailsPage from '@/containers/offer-details/offer-details';
import SignInPage from '@/containers/sign-in/sign-in';
import FavoritesPage from '@/containers/favorites/favorites';
import NotFoundPage from '@/pages/not-found-page/not-found-page';

import {AppRoute, AuthStatus} from '@/helpers/const';

const App = (props) => {
  const {loading, authStatus} = props;

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={AppRoute.LOGIN}
          render={() => {
            return authStatus === AuthStatus.NO_AUTH ? <SignInPage /> : <Redirect to={AppRoute.MAIN} />;
          }}
        />
        <Route
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesPage />}
        />
        <Route
          exact
          path={`${AppRoute.MAIN}:city?`}
          render={({match, location}) => <MainPage currentCity={match.params.city} currentSort={location.search} />} />
        <Route
          exact
          path={`${AppRoute.OFFER}/:id`}
          render={({match}) => <OfferDetailsPage id={Number(match.params.id)} />}
        />
        <Route render={() => <NotFoundPage />}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  authStatus: PropTypes.oneOf(Object.values(AuthStatus)).isRequired
};

export default App;
