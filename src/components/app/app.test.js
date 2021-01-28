import React from 'react';
import TestRenderer from 'react-test-renderer';

import App from '@/components/app/app';

const titlesOffers = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];

describe(`Component component snapshot`, () => {
  test(`Should correctly render Component component`, () => {
    const tree = TestRenderer.create(<App titlesOffers={titlesOffers} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
