import { useParams } from 'react-router-dom';
import UserGreeting from '@/components/UserGreeting/UserGreeting';
import UserActivity from '@/components/UserActivity/UserActivity';

/**
 * Profile page
 * @function Profile
 * @return {JSX.Element}
 */
const Profile = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <UserGreeting id={id} />
      <UserActivity id={id} />
    </div>
  );
};

export default Profile;
