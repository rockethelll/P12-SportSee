import { useParams } from 'react-router-dom';
import { useFetchMainData } from '../../api/Api';
import UserGreeting from '../../components/UserGreeting/UserGreeting';
import { USER_MAIN_DATA } from '../../data/data';

/**
 * Profile page
 * @function Profile
 * @return {JSX.Element}
 */
const Profile = () => {
  const { id } = useParams();

  /**
   * Custom hook to fetch user data
   * @function useFetchMainData
   * @param {string} endpoint - Endpoint of the API
   * @param {number} userId - User ID
   * @return {Object} - User data and loading state
   */
  const { userData, loading } = useFetchMainData(USER_MAIN_DATA, +id);

  return loading ? (
    // Display loading message
    <p>Loading...</p>
  ) : (
    <div className="container">
      {userData && <UserGreeting userData={userData} />}
    </div>
  );
};

export default Profile;
