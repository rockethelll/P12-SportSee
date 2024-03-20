import useBackendData from '@/configHook';
import ApiFetch from '@/services/api/ApiFetch';
import MockFetch from '@/services/api/MockFetch';

export default class HookManager {
  constructor() {
    // Choose whether to use backend data or mock data
    this.dataUser = useBackendData ? new ApiFetch() : new MockFetch();
  }

  async getUserInfo(id) {
    // Catch user data
    try {
      const userData = await this.dataUser.getUserData(id);
      return userData;
    } catch (error) {
      throw new Error('Error while retrieving user data', error);
    }
  }
}
