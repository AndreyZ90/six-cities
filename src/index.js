import React from 'react';
import {render} from 'react-dom';

import App from '@/components/app/app';

const titlesOffers = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];

const onTitleClick = () => {};

render(
    <App titlesOffers={titlesOffers} onTitleClick={onTitleClick} />,
    document.getElementById(`root`)
);
