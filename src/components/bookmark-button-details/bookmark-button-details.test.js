import React from 'react';
import TestRenderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([]);

const store = mockStore({
  user: {
    authStatus: `AUTH`
  }
});

import BookmarkButtonDetails from '@/components/bookmark-button-details/bookmark-button-details';

describe(`BookmarkButtonDetails component snapshot`, () => {
  test(`Should correctly render BookmarkButtonDetails component (active)`, () => {
    const tree = TestRenderer.create(
        <Provider store={store}>
          <Router>
            <BookmarkButtonDetails isActive={true} id={10} />
          </Router>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render BookmarkButtonDetails component (not active)`, () => {
    const tree = TestRenderer.create(
        <Provider store={store}>
          <Router>
            <BookmarkButtonDetails isActive={false} id={10} />
          </Router>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
