import React from 'react';
import {render} from 'react-dom';

import App from '@/components/app/app';

import offers from '@/mocks/offers';
import reviews from '@/mocks/reviews';

const onTitleClick = () => {};

render(
    <App
      offers={offers}
      reviews={reviews}
      onTitleClick={onTitleClick}
    />,
    document.getElementById(`root`)
);
