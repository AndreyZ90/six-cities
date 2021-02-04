import React from 'react';
import TestRenderer from 'react-test-renderer';

import withActiveFlag from '@/HOCs/with-active-flag/with-active-flag';

const MockComponent = () => <div className="wrapped-component">Wrapped Component</div>;
const WrappedComponent = withActiveFlag(MockComponent);

describe(`withActiveFlag HOC snapshot`, () => {
  test(`Should correctly render withActiveFlag HOC`, () => {
    const tree = TestRenderer.create(<WrappedComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
