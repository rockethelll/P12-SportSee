import { useEffect, useState } from 'react';

import getData from '@/services/getData';

const useFetchMainData = ({ id }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Simuler un temps de chargement de 1 seconde
      setTimeout(async () => {
        setError(null);
        setIsLoading(true);
        try {
          const request = await getData('USER_MAIN_DATA', id);
          setData(request.data);
          setIsLoading(false);
        } catch (error) {
          console.log('error', error);
          setError(error.message || "Une erreur s'est produite.");
          setIsLoading(false);
        }
      }, 500); // 0.5 seconde
    };
    fetchData();
  }, [id]);

  return { data, isLoading, error };
};

export default useFetchMainData;
