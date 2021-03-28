import React from 'react';

import NotFoundPageButton from '@/components/not-found-page-button/not-found-page-button';

const NotFoundPage = () => {
  return (
    <div className="page-not-found">
      <div className="page-not-found__container">
        <p className="page-not-found__number">404</p>
        <h1 className="page-not-found__title">Page not found :(</h1>
        <NotFoundPageButton />
      </div>
    </div>);
};

export default NotFoundPage;
