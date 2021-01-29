import React from 'react';
import TestRenderer from 'react-test-renderer';

import Host from '@/components/host/host';

const host = {
  avatarUrl: `img/avatar.jpg`,
  isPro: false,
  name: `Angelina`
};

const hostIsPro = Object.assign({}, host, {isPro: true});

const description = `Some description is here`;

describe(`Host component snapshot`, () => {
  test(`Should correctly render Host component (default)`, () => {
    const tree = TestRenderer.create(
        <Host
          host={host}
          description={description}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should correctly render Host component (isPro)`, () => {
    const tree = TestRenderer.create(
        <Host
          host={hostIsPro}
          description={description}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
