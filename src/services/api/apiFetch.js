import axios from 'axios';
import { toast } from 'sonner';

const api = axios.create({
  baseURL: `http://localhost:3000`,
});

export const getUserInfos = async (id) => {
  try {
    const response = await api.get(`/user/${id}`);
    toast.info('Api is being used');
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

export const getUserAverageSessions = async (id) => {
  try {
    const response = await api.get(`/user/${id}/average-sessions`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

export const getUserByActivity = async (id) => {
  try {
    const response = await api.get(`/user/${id}/activity`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

export const getUserPerformance = async (id) => {
  try {
    const response = await api.get(`/user/${id}/performance`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
