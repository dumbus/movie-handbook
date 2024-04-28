import './Paginator.scss';

const Paginator = ({ page, isLoading, onPageSwitch, total }) => {
  return (
    <div className='paginator'>
      <button
        className='paginator__button'
        onClick={() => onPageSwitch(-1)}
        disabled={isLoading || !total || (page <= 1)}
      >
        {'<'}
      </button>

      <div className='paginator__page paginator__page_wide'>{`Текущая страница: ${page}`}</div>
      <div className='paginator__page paginator__page_tight'>{`Страница: ${page}`}</div>

      <button
        className='paginator__button'
        onClick={() => onPageSwitch(1)}
        disabled={isLoading || !total || (page >= total)}
      >
        {'>'}
      </button>
    </div>
  )
};

export default Paginator;
