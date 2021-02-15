import React from 'react';
import TestRenderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import Footer from '@/components/footer/footer';

describe(`Footer component snapshot`, () => {
  test(`Should correctly render Footer component`, () => {
    const tree = TestRenderer.create(
        <MemoryRouter>
          <Footer/>
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
