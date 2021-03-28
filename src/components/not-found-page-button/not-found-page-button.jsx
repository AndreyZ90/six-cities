import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '@/helpers/const';

const NotFoundPageButton = () => {
  return (
    <button className="page-not-found__button">
      <Link to={AppRoute.MAIN}>go to the main page</Link>
    </button>
  );
};

export default NotFoundPageButton;
