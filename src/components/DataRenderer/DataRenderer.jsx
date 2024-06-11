import Spinner from '@/components/ui/Spinner/Spinner';

const DataRenderer = ({ children, error, isLoading }) => {
  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <Spinner size='sm' />
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center text-3xl text-secondary'>{error}</div>
    );
  }

  return children;
};

export default DataRenderer;
