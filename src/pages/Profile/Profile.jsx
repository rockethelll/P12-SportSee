import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import DataRenderer from '@/components/DataRenderer/DataRenderer';
import UserActivity from '@/components/UserActivity/UserActivity';
import UserGreeting from '@/components/UserGreeting/UserGreeting';
import UserInfoCard from '@/components/UserInfoCard/UserInfoCard';
import getData from '@/services/api/getData';

const Profile = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await getData('USER_MAIN_DATA', id);
      setData(request);
      console.log(request);
    };
    fetchData();
  }, [id]);

  return (
    <div className='container'>
      <UserGreeting firstName={data.userInfos?.firstName} />
      <div className='container__graph'>
        <div className='container__graph-left'>
          {/* <UserActivity id={id} /> */}
        </div>
        <div className='container__graph-right'>
          <UserInfoCard
            category='calories'
            text='Calories'
            data={`${data.keyData?.calorieCount}kCal`}
          />
          <UserInfoCard
            category='protein'
            text='Protéines'
            data={`${data.keyData?.proteinCount}g`}
          />
          <UserInfoCard
            category='carbs'
            text='Glucides'
            data={`${data.keyData?.carbohydrateCount}g`}
          />
          <UserInfoCard
            category='fat'
            text='Lipides'
            data={`${data.keyData?.lipidCount}g`}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
