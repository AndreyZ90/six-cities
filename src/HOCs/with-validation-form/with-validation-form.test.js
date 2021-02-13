import React from 'react';
import TestRenderer from 'react-test-renderer';

import withValidationForm from '@/HOCs/with-validation-form/with-validation-form';

const MockComponent = () => <div className="wrapped-component">Wrapped Component</div>;
const WrappedComponent = withValidationForm(MockComponent);

describe(`withValidationForm HOC snapshot`, () => {
  test(`Should correctly render withValidationForm HOC`, () => {
    const tree = TestRenderer.create(<WrappedComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
