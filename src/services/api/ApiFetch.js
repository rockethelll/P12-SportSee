// export class ApiFetch {
//   mockData = import.meta.env.VITE_BACKEND_URL;
// }

import { useEffect, useRef, useState } from 'react';

const useFetchApiData = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const abortController = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      abortController.current = new AbortController();

      try {
        const response = await fetch(url, {
          signal: abortController.current.signal,
        });
        setData(response);
        console.log(response);
      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      abortController.current?.abort();
    };
  }, [url]);
  return { isLoading, error, data };
};

export default useFetchApiData;
