import React from 'react';
import TestRenderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import Footer from '@/components/footer/footer';

describe(`Footer component snapshot`, () => {
  test(`Should correctly render Footer component`, () => {
    const tree = TestRenderer.create(
        <Router>
          <Footer/>
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
