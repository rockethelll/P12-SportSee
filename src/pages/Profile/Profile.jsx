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
    <div className='container pt-8 mx-auto mt-16 xl:pt-16 xl:mt-24 xl:ml-32 pl-28'>
      {/* <div className='container px-4 mx-auto translate-x-20 translate-y-20 xl:translate-y-32 lg:px-8 xl:px-32'> */}
      <DataRenderer error={error} isLoading={isLoading}>
        <UserGreeting firstName={data.userInfos?.firstName} />
        <div className='flex'>
          <div className='mr-8 '>
            <UserBarChart id={id} />
            <div className='flex justify-between mt-8'>
              <UserAreaChart id={id} />
              <UserRadarChart id={id} />
              <UserPieChart data={data} />
            </div>
          </div>
          <div className='space-y-11 xl:space-y-10'>
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
