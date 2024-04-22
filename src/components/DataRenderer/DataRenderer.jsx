import Spinner from '@/components/ui/Spinner/Spinner';

const DataRenderer = ({ isLoading, error, children }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div className='text-center'>{error}</div>;
  }

  return children;
};

export default DataRenderer;
