import React from 'react';
import TestRenderer from 'react-test-renderer';

import Main from '@/components/main/main';

const titlesOffers = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];

describe(`Main component snapshot`, () => {
  test(`Should correctly render Main component`, () => {
    const tree = TestRenderer.create(<Main titlesOffers={titlesOffers} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
