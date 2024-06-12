import { useParams } from 'react-router-dom';

import DataRenderer from '@/components/DataRenderer';
import UserAreaChart from '@/components/UserAreaChart';
import UserBarChart from '@/components/UserBarChart';
import UserGreeting from '@/components/UserGreeting';
import UserInfoCard from '@/components/UserInfoCard';
import UserPieChart from '@/components/UserPieChart';
import UserRadarChart from '@/components/UserRadarChart';
import useFetchMainData from '@/hook/useFetchMainData';

const Profile = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchMainData({ id });

  return (
    <div className='container flex flex-col items-start pt-8 mx-auto mt-16 pl-28 xl:pl-44 xl:pt-16 xl:mt-24'>
      <DataRenderer error={error} isLoading={isLoading}>
        <UserGreeting firstName={data.userInfos?.firstName} />
        <div className='flex'>
          <div className='mr-8 xl:mr-10 2xl:mr-14'>
            <UserBarChart id={id} />
            <div className='flex justify-between mt-8'>
              <UserAreaChart id={id} />
              <UserRadarChart id={id} />
              <UserPieChart data={data} />
            </div>
          </div>
          <div className='space-y-11 2xl:space-y-6'>
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
