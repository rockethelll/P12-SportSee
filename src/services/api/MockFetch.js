import mockData from '@/services/mockData';

export default class MockFetch {
  // Method to retrieve USER_MAIN_DATA
  async getUserData(id) {
    try {
      const { USER_MAIN_DATA } = mockData;
      const userInfos = await USER_MAIN_DATA.find((user) => {
        return user.id === +id;
      });
      if (!userInfos) {
        throw new Error('ID not found in mock data.');
      }
      return userInfos;
    } catch (error) {
      throw new Error("User data couldn't be retrieved from mock data.");
    }
  }

  // Method to retrieve USER_ACTIVITY
  async getUserActivity(id) {
    try {
      const { USER_ACTIVITY } = mockData;
      const userActivity = await USER_ACTIVITY.find((user) => {
        return user.userId === +id;
      });
      if (!userActivity) {
        throw new Error('ID not found in mock data.');
      }
      return userActivity;
    } catch (error) {
      throw new Error("User data couldn't be retrieved from mock data.");
    }
  }
}
