import { useParams } from 'react-router-dom';

import UserActivity from '@/components/UserActivity/UserActivity';
import UserGreeting from '@/components/UserGreeting/UserGreeting';
import Card from '@/components/UserInfoCard/UserInfoCard';

/**
 * Profile page
 * @function Profile
 * @return {JSX.Element}
 */
const Profile = () => {
  const { id } = useParams();

  return (
    <div className='container'>
      <UserGreeting id={id} />
      <div className='container__graph'>
        <div className='container__graph-left'>
          <UserActivity id={id} />
        </div>
        <div className='container__graph-right'>
          <Card category='calories' text='Calories' />
          <Card category='protein' text='Protéines' />
          <Card category='carbs' text='Glucides' />
          <Card category='fat' text='Lipides' />
        </div>
      </div>
    </div>
  );
};

export default Profile;
