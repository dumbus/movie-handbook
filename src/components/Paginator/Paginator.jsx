import React from 'react';

import './Paginator.scss';

import { useGlobalState } from '../../context/GlobalStateContext';

const Paginator = ({ pages }) => {
  const { pageSettings, setPageSettings, isLoading, setLoading } =
    useGlobalState();
  const { page } = pageSettings;

  const onPageSwitch = (base, offset = 0) => {
    window.scrollTo(0, 0);
    setLoading(true);

    sessionStorage.setItem('pagination-page', base + offset);

    setPageSettings((prevPageSettings) => ({
      ...prevPageSettings,
      page: base + offset
    }));
  };

  // eslint-disable-next-line
  const renderCenterButtons = (page, pages) => {
    const buttons = [];

    let first;
    let last;

    if (pages <= 5) {
      first = 1;
      last = pages;
    } else if (page <= 3) {
      first = 1;
      last = 3;
    } else if (page <= pages - 3 && page >= 3) {
      first = page - 1;
      last = page + 1;
    } else {
      first = pages - 2;
      last = pages;
    }

    for (let i = first; i <= last; i++) {
      const button = (
        <button
          key={i}
          className={`paginator__button ${i === page ? 'active' : ''}`}
          onClick={() => onPageSwitch(i, 0)}
        >
          {i}
        </button>
      );

      buttons.push(button);
    }

    return buttons;
  };

  const centerButtons = renderCenterButtons(page, pages);

  return (
    <div className="paginator">
      <button
        className="paginator__button paginator__button_prev"
        onClick={() => onPageSwitch(page, -1)}
        disabled={isLoading || !pages || page <= 1}
      >
        {'<'}
      </button>

      <div
        className={`paginator__limits paginator__first ${page <= 3 || pages <= 5 ? 'hidden' : ''}`}
      >
        <button
          className="paginator__button"
          onClick={() => onPageSwitch(1, 0)}
        >
          {1}
        </button>

        <div className="paginator__dots">
          <div className="paginator__dots_dot" />
          <div className="paginator__dots_dot" />
          <div className="paginator__dots_dot" />
        </div>
      </div>

      {centerButtons}

      <div
        className={`paginator__limits paginator__last ${pages <= 5 || page >= pages - 2 ? 'hidden' : ''}`}
      >
        <div className="paginator__dots">
          <div className="paginator__dots_dot" />
          <div className="paginator__dots_dot" />
          <div className="paginator__dots_dot" />
        </div>

        <button
          className="paginator__last_button paginator__button"
          onClick={() => onPageSwitch(pages, 0)}
        >
          {pages}
        </button>
      </div>

      <button
        className="paginator__button paginator__button_next"
        onClick={() => onPageSwitch(page, 1)}
        disabled={isLoading || !pages || page >= pages}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Paginator;
