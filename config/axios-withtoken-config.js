import axios from 'axios';
import { useAppContext } from '../context/app-context';
import ENV from './env';
import { router } from 'expo-router';

export const axiosWithToken = () => {
  const { token, onLogout } = useAppContext();


  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token.accessToken}`,
    'User-Id': token.userId
  }

  // Buat instance axios baru
  const axiosInstance = axios.create({
    baseURL: ENV.BASE_URL,
    headers: headers
  });

  // Interceptor untuk menangani response global
  axiosInstance.interceptors.response.use(
    (response) => {
      // Jika respons sukses, kembalikan response
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        // Redirect ke halaman login jika token expired atau tidak valid
        // Linking.openURL('myapp://login');  // Sesuaikan dengan deep link atau URL login di aplikasi Anda
        console.log(">> token habis bro...", error);
        // router.push('/');
        onLogout();
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};