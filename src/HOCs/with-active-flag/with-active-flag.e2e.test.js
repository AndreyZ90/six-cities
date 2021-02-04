import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import withActiveFlag from '@/HOCs/with-active-flag/with-active-flag';

configure({
  adapter: new Adapter()
});

const MockComponent = () => <div className="wrapped-component">Wrapped Component</div>;
const MockComponentWrapped = withActiveFlag(MockComponent);

describe(`withActiveFlag e2e test`, () => {
  test(`Should correctly pass props to MockComponentWrapped`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.prop(`isActiveFlag`)).toBe(false);
    expect(wrapper.prop(`onFlagChange`)).toBeInstanceOf(Function);
  });

  test(`Should correctly pass prop (isActiveFlag) after click`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.props().onFlagChange();
    expect(wrapper.prop(`isActiveFlag`)).toBe(true);
  });
});
