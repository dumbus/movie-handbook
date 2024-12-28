import React from 'react';

import './NotFoundPage.scss';

import ErrorNotFound from '~/components/ErrorNotFound';

const NotFoundPage = () => {
  return (
    <div className="not-found container">
      <ErrorNotFound />
    </div>
  );
};

export default NotFoundPage;
