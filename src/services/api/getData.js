import {
  getUserAverageSessions,
  getUserByActivity,
  getUserInfos,
  getUserPerformance,
} from '@/services/mockData';
// import {
//   getUserAverageSessions,
//   getUserByActivity,
//   getUserInfos,
//   getUserPerformance,
// } from '@/services/api/ApiFetch';

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
      data = getUserInfos(id).data;
      break;
    case 'USER_ACTIVITY':
      data = getUserByActivity(id).data;
      break;
    case 'USER_AVERAGE_SESSIONS':
      data = getUserAverageSessions(id).data;
      break;
    case 'USER_PERFORMANCE':
      data = getUserPerformance(id).data;
      break;
    default:
      throw new Error('Invalid data type');
  }
  return data;
};

export default getData;
