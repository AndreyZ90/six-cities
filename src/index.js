import React from 'react';
import {render} from 'react-dom';

import App from '@/components/app/app';

const titlesOffers = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];

render(
    <App titlesOffers={titlesOffers} />,
    document.getElementById(`root`)
);
