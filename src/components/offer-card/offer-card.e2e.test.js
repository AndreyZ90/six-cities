import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import OfferCard from '@/components/offer-card/offer-card';

configure({
  adapter: new Adapter()
});

const offer = {
  id: 1,
  isFavorite: true,
  isPremium: true,
  previewImage: `img/apartment-01.jpg`,
  price: 120,
  rating: 4.9,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
};

describe(`OfferCard e2e test`, () => {
  test(`Should called fn onActiveCardChange with id`, () => {
    const onActiveCardChange = jest.fn();

    const offerCardComponent = shallow(
        <OfferCard
          offer={offer}
          onTitleClick={() => {}}
          onActiveCardChange={onActiveCardChange}
        />
    );

    offerCardComponent.simulate(`mouseenter`);

    expect(onActiveCardChange.mock.calls[0][0]).toBe(1);
  });

  test(`Should called fn onActiveCardChange with -1`, () => {
    const onActiveCardChange = jest.fn();

    const offerCardComponent = shallow(
        <OfferCard
          offer={offer}
          onTitleClick={() => {}}
          onActiveCardChange={onActiveCardChange}
        />
    );

    offerCardComponent.simulate(`mouseleave`);

    expect(onActiveCardChange.mock.calls[0][0]).toBe(-1);
  });
});

