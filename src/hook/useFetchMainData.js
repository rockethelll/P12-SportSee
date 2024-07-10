import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import getData from '@/services/getData';

const useFetchMainData = ({ id }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay for the request
      setTimeout(async () => {
        setError(null);
        setIsLoading(true);
        try {
          const request = await getData('USER_MAIN_DATA', id);
          setData(request.data);
          setIsLoading(false);
        } catch (error) {
          setError(error.message || "Une erreur s'est produite.");
          setIsLoading(false);
          navigate('/error');
        }
      }, 500); // 0.5 seconde
    };
    fetchData();
  }, [id, navigate]);

  return { data, isLoading, error };
};

export default useFetchMainData;
