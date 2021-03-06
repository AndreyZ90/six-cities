import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from '@/containers/app/app';

import store from '@/store/store';
import ActionCreator from '@/store/actions/creator';
import Operation from '@/store/actions/operation';

store.dispatch(ActionCreator.fetchDataRequest());

Promise.all([
  store.dispatch(Operation.fetchOffersRequest())
    .then((offers) => {
      const cities = [...new Set(offers.map(({city}) => city.name))];
      store.dispatch(ActionCreator.setCities(cities));

      return cities;
    })
    .then((cities) => store.dispatch(ActionCreator.setCurrentCity(cities[0]))),
  store.dispatch(Operation.fetchLoginRequestGet())
])
.then(() => store.dispatch(ActionCreator.fetchDataSuccess()));

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
