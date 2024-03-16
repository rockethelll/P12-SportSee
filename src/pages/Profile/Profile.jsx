import { useParams } from 'react-router-dom';
import { USER_MAIN_DATA } from '../../data/data';
import { useFetchMainData } from '../../api/Api';

const Profile = () => {
  const { id } = useParams();
  const { userData, loading } = useFetchMainData(USER_MAIN_DATA, +id);

  return loading ? (
    // Display loading message
    <p>Loading...</p>
  ) : (
    <div className="container">
      <h1>Profile</h1>
      {userData && (
        <div>
          {/* Affichez les données de l'utilisateur ici */}
          <p>Id : {userData.id}</p>
          <p>FirstName: {userData.userInfos.firstName}</p>
          <p>LastName: {userData.userInfos.lastName}</p>
          <p>Age: {userData.userInfos.age}</p>
          {/* Ajoutez le reste des données d'utilisateur ici */}
        </div>
      )}
    </div>
  );
};

export default Profile;
