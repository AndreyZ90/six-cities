import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from '@/containers/app/app';

import reducer from '@/reducers/reducer';
import {getOffers} from '@/actions/action-creator';

import reviews from '@/mocks/reviews';
import nearby from '@/mocks/nearby';

const onTitleClick = () => {};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(getOffers());

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
