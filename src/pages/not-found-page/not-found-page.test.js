import React from 'react';
import TestRenderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import NotFoundPage from '@/pages/not-found-page/not-found-page';

describe(`NotFoundPage component snapshot`, () => {
  test(`Should correctly render NotFoundPage component`, () => {
    const tree = TestRenderer.create(
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
