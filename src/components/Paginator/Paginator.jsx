// import { useState} from 'react';

import './Paginator.scss';

const Paginator = ({ page, isLoading, switchPage }) => {
  // const [currentPage, setCurrentPage] = useState(page);

  // const switchPage = (offset) => {
  //   setCurrentPage(currentPage => currentPage + offset);
  //   setPage(page => page + offset);
  // };

  // const renderButtonstList = () => {
  //   const buttons = [];

  //   for (let i = activePage; i < activePage + 5; i++) {
  //     const listItem = (
  //       <li className='paginator__list_item' key={i}>
  //         <button
  //           className={`paginator__button ${i === activePage ? 'active' : ''}`}
  //           onClick={}
  //         >
  //           {`${i}`}
  //         </button>
  //       </li>
  //     );

  //     buttons.push(listItem);
  //   }

  //   return (
  //     <ul className='paginator__list'>
  //       {buttons}
  //     </ul>
  //   )
  // };

  // const buttonsList = renderButtonstList();

  return (
    <div className='paginator'>
      <button
        className='paginator__button'
        onClick={() => switchPage(-1)}
        disabled={(page <= 1) || isLoading}
      >
        {'<'}
      </button>

      {/* {buttonsList} */}
      <div className='paginator__page'>{`Текущая страница: ${page}`}</div>

      <button
        className='paginator__button'
        onClick={() => switchPage(1)}
        disabled={(page >= 5) || isLoading}
      >
        {'>'}
      </button>
    </div>
  )
};

export default Paginator;
