import useBackendData from '@/configHook';
import ApiFetch from '@/services/api/ApiFetch';
import MockFetch from '@/services/api/MockFetch';

export default class HookManager {
  constructor() {
    // Choose whether to use backend data or mock data
    this.dataUser = useBackendData ? new ApiFetch() : new MockFetch();
  }

  // Method to retrieve USER_MAIN_DATA
  async getUserInfo(id, setUSerData, setIsLoading) {
    try {
      setIsLoading(true);
      const userData = await this.dataUser.getUserData(id);
      setUSerData(userData);
    } catch (error) {
      console.error('Error while retrieving user mock data', error);
    } finally {
      setIsLoading(false);
    }
  }

  // Method to retrieve USER_ACTIVITY
  async getUserActivity(id, setUserData) {
    try {
      const UserActivity = await this.dataUser.getUserActivity(id);
      setUserData(UserActivity);
    } catch (error) {
      console.error('Error while retrieving user mock data', error);
    }
  }
}
