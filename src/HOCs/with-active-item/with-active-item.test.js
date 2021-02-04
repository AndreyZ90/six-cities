import React from 'react';
import TestRenderer from 'react-test-renderer';

import withActiveItem from '@/HOCs/with-active-item/with-active-item';

const MockComponent = () => <div className="wrapped-component">Wrapped Component</div>;
const WrappedComponent = withActiveItem(MockComponent);

describe(`withActiveItem HOC snapshot`, () => {
  test(`Should correctly render withActiveItem HOC`, () => {
    const tree = TestRenderer.create(<WrappedComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
