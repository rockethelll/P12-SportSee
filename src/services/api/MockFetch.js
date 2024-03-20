import mockData from '@/services/mockData';

export default class MockFetch {
  async getUserData(id) {
    const { USER_MAIN_DATA } = mockData;
    const userInfos = await USER_MAIN_DATA.find((user) => {
      return user.id === +id;
    });
    return userInfos;
  }
}
