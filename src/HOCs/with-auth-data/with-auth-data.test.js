import React from 'react';
import TestRenderer from 'react-test-renderer';

import withAuthData from '@/HOCs/with-auth-data/with-auth-data';

const MockComponent = () => <div className="wrapped-component">Wrapped Component</div>;
const WrappedComponent = withAuthData(MockComponent);

describe(`withAuthData HOC snapshot`, () => {
  test(`Should correctly render withAuthData HOC`, () => {
    const tree = TestRenderer.create(<WrappedComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
