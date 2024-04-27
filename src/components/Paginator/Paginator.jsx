import './Paginator.scss';

const Paginator = ({ page, isLoading, onPageSwitch }) => {
  return (
    <div className='paginator'>
      <button
        className='paginator__button'
        onClick={() => onPageSwitch(-1)}
        disabled={(page <= 1) || isLoading}
      >
        {'<'}
      </button>

      <div className='paginator__page paginator__page_wide'>{`Текущая страница: ${page}`}</div>
      <div className='paginator__page paginator__page_tight'>{`Страница: ${page}`}</div>

      <button
        className='paginator__button'
        onClick={() => onPageSwitch(1)}
        disabled={(page >= 5) || isLoading}
      >
        {'>'}
      </button>
    </div>
  )
};

export default Paginator;
