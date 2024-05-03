import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from '@/data/mockData';

export const getUserInfos = (id) => {
  try {
    const response = USER_MAIN_DATA.find((user) => user.id === +id);
    // alert('Mocked data is being used');
    return { data: response };
  } catch (error) {
    throw new Error('User not found');
  }
};

export const getUserByActivity = (id) => {
  try {
    const response = USER_ACTIVITY.find((user) => user.userId === +id);
    return { data: response };
  } catch (error) {
    throw new Error('User not found');
  }
};

export const getUserAverageSessions = (id) => {
  try {
    const response = USER_AVERAGE_SESSIONS.find((user) => user.userId === +id);
    return { data: response };
  } catch (error) {
    throw new Error('User not found');
  }
};

export const getUserPerformance = (id) => {
  try {
    const response = USER_PERFORMANCE.find((user) => user.userId === +id);
    return { data: response };
  } catch (error) {
    throw new Error('User not found');
  }
};
