import React from 'react';

import './Paginator.scss';

import { useGlobalState } from '../../context/GlobalStateContext';

const Paginator = ({ pages }) => {
  const { pageSettings, setPageSettings, isLoading, setLoading } =
    useGlobalState();
  const { page } = pageSettings;

  const onPageSwitch = (offset) => {
    window.scrollTo(0, 0);
    setLoading(true);

    localStorage.setItem('pagination-page', page + offset);

    setPageSettings((prevPageSettings) => ({
      ...prevPageSettings,
      page: prevPageSettings.page + offset
    }));
  };

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
