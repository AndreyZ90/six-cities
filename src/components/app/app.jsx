import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Main from '@/containers/main/main';
import OfferDetails from '@/containers/offer-details/offer-details';
import SignIn from '@/containers/sign-in/sign-in';

import {AppRoute, AuthStatus} from '@/helpers/const';

const App = (props) => {
  const {loading, authStatus} = props;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <Switch>
        <Route
          exact
          path={`${AppRoute.MAIN}:city?`}
          render={({match}) => <Main currentCity={match.params.city} />}
        />
        <Route
          exact
          path={`${AppRoute.OFFER}/:id`}
          render={({match}) => <OfferDetails id={match.params.id} />}
        />
        <Route
          exact
          path={AppRoute.LOGIN}
          render={() => {
            return authStatus === AuthStatus.NO_AUTH ? <SignIn /> : <Redirect to={AppRoute.MAIN} />;
          }}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  authStatus: PropTypes.oneOf(Object.values(AuthStatus)).isRequired
};

export default App;
