import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Fetch main data from API
 * @param {String} url
 * @param {Number} id
 * @return {Promise}
 * @return {Promise.resolve<String>} data
 * @return {Promise.resolve<Boolean>} loading
 * @return {Promise.reject<Error>} error
 */
const useFetchMainData = (url, id) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfos = url;
        const userId = userInfos.find((res) => {
          return res.id === id;
        });
        setUserData(userId);
        setLoading(false);
      } catch (error) {
        navigate('/error');
      }
    };
    fetchData();
  }, []);

  return { userData, loading };
};

export default useFetchMainData;