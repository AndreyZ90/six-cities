import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import withActiveItem from '@/HOCs/with-active-item/with-active-item';

configure({
  adapter: new Adapter()
});

const MockComponent = () => <div className="wrapped-component">Wrapped Component</div>;
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`withActiveItem e2e test`, () => {
  test(`Should correctly pass props to MockComponentWrapped`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.prop(`activeItem`)).toBe(-1);
    expect(wrapper.prop(`onActiveItemChange`)).toBeInstanceOf(Function);
  });

  test(`Should correctly pass prop (isActiveFlag) after click`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.props().onActiveItemChange(22);
    expect(wrapper.prop(`activeItem`)).toBe(22);
  });
});
