import { useEffect, useState } from 'react';

// Affect the value of the environment variable to a constant
const mockDataUrl = import.meta.env.VITE_MOCKED_URL;

const useMockedData = () => {
  // Create a custom hook to fetch the main data
  const useFetchMainData = (id) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(mockDataUrl);
          const data = await response.json();

          // Get the user data from the mock data if it exists
          const userData = data[id] ? data[id].userInfo : null;
          if (userData) {
            setUserInfo(userData.userInfos);
          } else {
            console.error(`User with id ${id} not found in mock data.`);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchData();
    }, [id]);

    return { userInfo };
  };

  return { useFetchMainData };
};

export default useMockedData;
//   const useFetchAcitivty = ({ id }) => {
//     return (<dicv>je suis useActivity de mock avec l'id {id}</dicv>);
//   };
