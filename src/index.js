import React from 'react';
import {render} from 'react-dom';

import App from '@/components/app/app';

import offers from '@/mocks/offers';

const onTitleClick = () => {};

render(
    <App
      offers={offers}
      onTitleClick={onTitleClick}
    />,
    document.getElementById(`root`)
);
