import { useParams } from 'react-router-dom';

import DataRenderer from '@/components/DataRenderer/DataRenderer';
import UserAreaChart from '@/components/UserAreaChart/UserAreaChart';
import UserBarChart from '@/components/UserBarChart/UserBarChart';
import UserGreeting from '@/components/UserGreeting/UserGreeting';
import UserInfoCard from '@/components/UserInfoCard/UserInfoCard';
import UserPieChart from '@/components/UserPieChart/UserPieChart';
import UserRadarChart from '@/components/UserRadarChart/UserRadarChart';
import useFetchMainData from '@/hook/useFetchMainData';

const Profile = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchMainData({ id });

  return (
    <div className='container'>
      <DataRenderer error={error} isLoading={isLoading}>
        <UserGreeting firstName={data.userInfos?.firstName} />
        <div className='container__graph'>
          <div className='container__graph-left'>
            <UserBarChart id={id} />
            <div className='bottom-graph'>
              <UserAreaChart id={id} />
              <UserRadarChart id={id} />
              <UserPieChart data={data} />
            </div>
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
      </DataRenderer>
    </div>
  );
};

export default Profile;
