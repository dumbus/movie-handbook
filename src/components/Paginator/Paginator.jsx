import React from 'react';

import './Paginator.scss';

const Paginator = ({ page, isLoading, onPageSwitch, pages }) => {
  return (
    <div className="paginator">
      <button
        className="paginator__button"
        onClick={() => onPageSwitch(-1)}
        disabled={isLoading || !pages || page <= 1}
      >
        {'<'}
      </button>

      <div className="paginator__page paginator__page_wide">{`Текущая страница: ${page}`}</div>
      <div className="paginator__page paginator__page_tight">{`Страница: ${page}`}</div>

      <button
        className="paginator__button"
        onClick={() => onPageSwitch(1)}
        disabled={isLoading || !pages || page >= pages}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Paginator;
