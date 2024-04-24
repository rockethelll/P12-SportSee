const URL = 'http://localhost:3000/user';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3000`,
});

export const getUserInfos = async (id) => {
  try {
    const response = await api.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
