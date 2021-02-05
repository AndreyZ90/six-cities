import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from '@/containers/app/app';

import reducer from '@/store/reducers/reducer';
import Operation from '@/store/actions/operation';
import createApi from '@/services/api';

import reviews from '@/mocks/reviews';
import nearby from '@/mocks/nearby';

const onTitleClick = () => {};

const api = createApi();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(Operation.fetchOffersRequest());

render(
    <Provider store={store}>
      <App
        reviews={reviews}
        nearby={nearby}
        onTitleClick={onTitleClick}
      />
    </Provider>,
    document.getElementById(`root`)
);
