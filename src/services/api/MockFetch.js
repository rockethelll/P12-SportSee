import mockData from '@/services/mockData';

export default class MockFetch {
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
}
