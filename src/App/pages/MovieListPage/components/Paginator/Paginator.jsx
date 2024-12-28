import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Paginator.scss';

const Paginator = ({ page, pages, listType }) => {
  const navigate = useNavigate();

  const currentPage = Number(page);
  const totalPages = Number(pages);

  const onPageSwitch = (base, offset = 0) => {
    const newPage = base + offset;

    navigate(`/movies/${listType}/${newPage}`);
  };

  const renderCenterButtons = (currentPage, totalPages) => {
    const buttons = [];

    let first;
    let last;

    if (totalPages <= 5) {
      first = 1;
      last = totalPages;
    } else if (currentPage <= 3) {
      first = 1;
      last = 3;
    } else if (currentPage <= totalPages - 3 && currentPage >= 3) {
      first = currentPage - 1;
      last = currentPage + 1;
    } else {
      first = totalPages - 2;
      last = totalPages;
    }

    for (let i = first; i <= last; i++) {
      const button = (
        <button
          key={i}
          className={`paginator__button ${i === currentPage ? 'active' : 'secondary'}`}
          onClick={() => onPageSwitch(i, 0)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );

      buttons.push(button);
    }

    return buttons;
  };

  const centerButtons = renderCenterButtons(currentPage, totalPages);

  return (
    <div className="paginator">
      <button
        className="paginator__button paginator__button_mobile"
        onClick={() => onPageSwitch(1, 0)}
        disabled={currentPage <= 1}
      >
        {'<<'}
      </button>

      <button
        className="paginator__button paginator__button_prev"
        onClick={() => onPageSwitch(currentPage, -1)}
        disabled={currentPage <= 1}
      >
        {'<'}
      </button>

      <div
        className={`paginator__limits ${currentPage <= 3 || totalPages <= 5 ? 'hidden' : ''}`}
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
        className={`paginator__limits ${totalPages <= 5 || currentPage >= totalPages - 2 ? 'hidden' : ''}`}
      >
        <div className="paginator__dots">
          <div className="paginator__dots_dot" />
          <div className="paginator__dots_dot" />
          <div className="paginator__dots_dot" />
        </div>

        <button
          className="paginator__button"
          onClick={() => onPageSwitch(totalPages, 0)}
        >
          {totalPages}
        </button>
      </div>

      <button
        className="paginator__button paginator__button_next"
        onClick={() => onPageSwitch(currentPage, 1)}
        disabled={currentPage >= totalPages}
      >
        {'>'}
      </button>

      <button
        className="paginator__button paginator__button_mobile"
        onClick={() => onPageSwitch(totalPages, 0)}
        disabled={currentPage >= totalPages}
      >
        {'>>'}
      </button>
    </div>
  );
};

export default Paginator;
