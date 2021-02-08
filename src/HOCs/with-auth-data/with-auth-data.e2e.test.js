import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import withAuthData from '@/HOCs/with-auth-data/with-auth-data';

configure({
  adapter: new Adapter()
});

const MockComponent = () => <div className="wrapped-component">Wrapped Component</div>;
const MockComponentWrapped = withAuthData(MockComponent);

describe(`withAuthData e2e test`, () => {
  test(`Should correctly pass props to MockComponentWrapped`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.prop(`email`)).toBe(``);
    expect(wrapper.prop(`password`)).toBe(``);
    expect(wrapper.prop(`onDataChange`)).toBeInstanceOf(Function);
  });

  test(`Should correctly pass prop (email) after click`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.props().onDataChange(`email`, `test@gmail.com`);
    expect(wrapper.prop(`email`)).toBe(`test@gmail.com`);
  });

  test(`Should correctly pass prop (password) after click`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.props().onDataChange(`password`, `qwerty`);
    expect(wrapper.prop(`password`)).toBe(`qwerty`);
  });
});
