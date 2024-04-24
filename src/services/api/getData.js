import {} from // getUserAverageSessions,
// getUserByActivity,
// getUserInfos,
// getUserPerformance,
'@/services/api/ApiFetch';
import {
  getUserAverageSessions,
  getUserByActivity,
  getUserInfos,
  getUserPerformance,
} from '@/services/mockData';

/**
 * Function that retrieves different types of data based on the specified type and user ID.
 * @param type - The type of data being requested.
 * @param id - The ID of the user whose data is being requested.
 * @returns {Promise<[]>} - The data requested based on the type and user ID
 */
const getData = async (type, id) => {
  let data = null;

  switch (type) {
    case 'USER_MAIN_DATA':
      data = getUserInfos(id);
      break;
    case 'USER_ACTIVITY':
      data = getUserByActivity(id);
      break;
    case 'USER_AVERAGE_SESSIONS':
      data = getUserAverageSessions(id);
      break;
    case 'USER_PERFORMANCE':
      data = getUserPerformance(id);
      break;
    default:
      throw new Error('Invalid data type');
  }
  return data;
};

export default getData;
