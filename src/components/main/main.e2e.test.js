import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Main from '@/components/main/main';

configure({
  adapter: new Adapter()
});

const titlesOffers = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];

describe(`Main e2e test`, () => {
  test(`Should called fn onTitleClick once`, () => {
    const onTitleClick = jest.fn();

    const mainComponent = shallow(<Main titlesOffers={titlesOffers} onTitleClick={(onTitleClick)} />);
    const title = mainComponent.find(`.place-card__name`).at(0);

    title.simulate(`click`);

    expect(onTitleClick).toHaveBeenCalledTimes(1);
  });
});
