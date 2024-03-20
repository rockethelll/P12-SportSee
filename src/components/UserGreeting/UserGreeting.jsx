import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import HookManager from '@/services/HookManager';

const UserGreeting = ({ id }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const hookManager = new HookManager();

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await hookManager.getUserInfo(id);
      if (data && data.userInfos) {
        setUserData(data.userInfos);
      }
      setIsLoading(false);
    };
    fetchUserData();
  }, [id]);

  return (
    <div className="user-greeting">
      {isLoading && <p>Chargement...</p>}
      {!isLoading && userData && (
        <>
          <h1>
            Bonjour <span>{userData.firstName}</span>
          </h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </>
      )}
      {!isLoading && !userData && <p>Aucune donnée disponible</p>}
    </div>
  );
};

UserGreeting.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UserGreeting;
