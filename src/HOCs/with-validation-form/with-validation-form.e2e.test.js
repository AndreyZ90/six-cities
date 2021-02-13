import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import withValidationForm from '@/HOCs/with-validation-form/with-validation-form';

configure({
  adapter: new Adapter()
});

const MockComponent = () => <div className="wrapped-component">Wrapped Component</div>;
const MockComponentWrapped = withValidationForm(MockComponent);

const str = `This string has more than 50 characters but less than 300 and it will be valid`;

describe(`withValidationForm e2e test`, () => {
  test(`Should correctly pass props to MockComponentWrapped`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.prop(`review`)).toBe(``);
    expect(wrapper.prop(`rating`)).toBe(-1);
    expect(wrapper.prop(`isValid`)).toBe(false);
    expect(wrapper.prop(`onValueChange`)).toBeInstanceOf(Function);
  });

  test(`Should correctly pass prop (review) after change`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.props().onValueChange(`review`, `Hello World!`);
    expect(wrapper.prop(`review`)).toBe(`Hello World!`);
  });

  test(`Should correctly pass prop (rating) after change`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.props().onValueChange(`rating`, 5);
    expect(wrapper.prop(`rating`)).toBe(5);
  });

  test(`Should correctly pass prop (isValid) after change`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.props().onValueChange(`review`, `Hello World!`);
    wrapper.props().onValueChange(`rating`, 5);
    expect(wrapper.prop(`isValid`)).toBe(false);
  });

  test(`Should correctly pass prop (isValid) after change`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.props().onValueChange(`review`, str);
    wrapper.props().onValueChange(`rating`, 3);
    expect(wrapper.prop(`isValid`)).toBe(true);
  });
});
