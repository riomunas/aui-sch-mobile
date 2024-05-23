import axios from 'axios';
import ENV from './env';

export const axiosBase = (accessToken) => {
  console.log(accessToken);
  const headers = {
    'Content-Type': 'application/json',
  //   'Authorization': `Bearer ${token.accessToken}`
  }

  // // Buat instance axios baru
  // return axios.create({
  //   baseURL: ENV.BASE_URL,
  // });
  
  // Buat instance axios baru
  return axios.create({
    baseURL: ENV.BASE_URL,
    headers: headers
  });
};