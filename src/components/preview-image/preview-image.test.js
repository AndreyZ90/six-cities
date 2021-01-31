import React from 'react';
import TestRenderer from 'react-test-renderer';

import PreviewImage from '@/components/preview-image/preview-image';

const src = `img/image.jpg`;

describe(`PreviewImage component snapshot`, () => {
  test(`Should correctly render PreviewImage component`, () => {
    const tree = TestRenderer.create(<PreviewImage src={src} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
