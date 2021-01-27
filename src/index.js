import React from 'react';
import {render} from 'react-dom';

import App from '@/components/app/app';

const offersCount = 100;

render(
    <App offersCount={offersCount} />,
    document.getElementById(`root`)
);
