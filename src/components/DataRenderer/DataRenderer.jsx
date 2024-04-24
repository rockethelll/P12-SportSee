import Spinner from '@/components/ui/Spinner/Spinner';

const DataRenderer = ({ children, error, isLoading }) => {
  if (isLoading) {
    return (
      <div className='data-renderer'>
        <Spinner size='sm' />
      </div>
    );
  }

  if (error) {
    return <div className='data-renderer-error'>{error}</div>;
  }

  return children;
};

export default DataRenderer;
