/**
 * UserGreeting component
 * @param {userData} userData - User informations and greeting
 * @return {JSX.Element} - UserGreeting component
 */
const UserGreeting = ({ userData }) => {
  return (
    <div className="user-greeting">
      <h1>
        Bonjour <span>{userData.userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default UserGreeting;
