import useFetchMainData from "@/api/useFetchActivity";
import { USER_MAIN_DATA } from '@/services/mockData';

/**
 * UserGreeting component
 * @param {userData} userData - User informations and greeting
 * @return {JSX.Element} - UserGreeting component
 */
const UserGreeting = ({ id }) => {
  const { userData } = useFetchMainData(USER_MAIN_DATA, +id);
  console.log(userData);
  console.log(id);

  return (
    <div className="user-greeting">
      {/* <h1>
        Bonjour <span>{userData.userInfos.firstName}</span>
      </h1> */}
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default UserGreeting;
