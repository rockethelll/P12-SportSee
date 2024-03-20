import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from '@/services/mockData';

const getUserById = (id) => {
  USER_MAIN_DATA.find((user) => {
    return user.userId === id;
  });
};

const getUserByActivity = (id) => {
  USER_ACTIVITY.find((user) => {
    return user.userId === id;
  });
};

const getUserAverageSessions = (id) => {
  USER_AVERAGE_SESSIONS.find((user) => {
    return user.userId === id;
  });
};

const getUserPerformance = (id) => {
  USER_PERFORMANCE.find((user) => {
    return user.userId === id;
  });
};

export {
  getUserById,
  getUserByActivity,
  getUserAverageSessions,
  getUserPerformance,
};
