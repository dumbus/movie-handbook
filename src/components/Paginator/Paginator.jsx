import './Paginator.scss';

const Paginator = ({ page, isLoading, switchPage }) => {
  return (
    <div className='paginator'>
      <button
        className='paginator__button'
        onClick={() => switchPage(-1)}
        disabled={(page <= 1) || isLoading}
      >
        {'<'}
      </button>

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
