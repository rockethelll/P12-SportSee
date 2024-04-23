import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import getData from '@/services/api/getData';

const UserLineChart = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const request = await getData('USER_ACTIVITY', id);
      setData(request?.sessions);
      console.log(request);
    };
    data();
  }, [id]);
  return <div></div>;
};

export default UserLineChart;
