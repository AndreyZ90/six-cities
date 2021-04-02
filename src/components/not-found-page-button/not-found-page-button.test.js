import React from 'react';
import TestRenderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import NotFoundPageButton from '@/components/not-found-page-button/not-found-page-button';

describe(`NotFoundPageButton component snapshot`, () => {
  test(`Should correctly render NotFoundPageButton component`, () => {
    const tree = TestRenderer.create(
        <MemoryRouter>
          <NotFoundPageButton />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
