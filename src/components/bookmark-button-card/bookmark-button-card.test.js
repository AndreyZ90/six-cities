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

import BookmarkButtonCard from '@/components/bookmark-button-card/bookmark-button-card';

describe(`BookmarkButtonCard component snapshot`, () => {
  test(`Should correctly render BookmarkButtonCard component (active)`, () => {
    const tree = TestRenderer.create(
        <Provider store={store}>
          <Router>
            <BookmarkButtonCard isActive={true} id={10} />
          </Router>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render BookmarkButtonCard component (not active)`, () => {
    const tree = TestRenderer.create(
        <Provider store={store}>
          <Router>
            <BookmarkButtonCard isActive={false} id={10} />
          </Router>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
