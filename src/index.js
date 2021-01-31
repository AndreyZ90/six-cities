import React from 'react';
import {render} from 'react-dom';

import App from '@/components/app/app';

import offers from '@/mocks/offers';
import reviews from '@/mocks/reviews';
import nearby from '@/mocks/nearby';

const onTitleClick = () => {};

render(
    <App
      offers={offers}
      reviews={reviews}
      nearby={nearby}
      onTitleClick={onTitleClick}
    />,
    document.getElementById(`root`)
);
