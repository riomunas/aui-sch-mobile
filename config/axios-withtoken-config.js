import axios from 'axios';
import { useAppContext } from '../context/app-context';
import ENV from './env';

export const axiosWithToken = () => {
  const { token } = useAppContext();

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token.accessToken}`,
    'User-Id': token.userId
  }

  // Buat instance axios baru
  return axios.create({
    baseURL: ENV.BASE_URL,
    headers: headers
  });
};