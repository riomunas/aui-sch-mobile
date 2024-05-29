import { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { axiosBase } from "../config/axios-base-config";

export const AppContext = createContext({});

export const useAppContext = () => {
  return useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState({accessToken:null, refreshToken:null, userId:null});
  const [ data, setData ] = useState(null);
  const fetchData = axiosBase();

  const logout = async () => {
    try {

      const decodedToken = jwtDecode(token.accessToken); // Mendekode token JWT untuk membaca informasi

      const expirationTimeInSeconds = decodedToken.exp;
      const currentTimeInSeconds = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik

      if (expirationTimeInSeconds < currentTimeInSeconds) {
        // Token sudah kedaluwarsa
        // Alert.alert('Token Expired', 'Your Keycloak token has expired. Please log in again.');

        setToken({
          accessToken:null, 
          refreshToken:null,
          userId:null
        });
        return;
        // Lakukan sesuatu di sini, seperti menghapus token dari penyimpanan atau mengarahkan pengguna ke halaman login
      } else {
        // Token masih valid
      }

      const response = await fetchData.post('/api/user/logout', {
        refresh_token: token.refreshToken
      },{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.accessToken}`
        }
      });

      // Mengatur token setelah login berhasil
      setToken({
        accessToken:null, 
        refreshToken:null,
        userId:null
      });

      return response;
    } catch(error) {
      return error.response.data;
    }
  }

  const login = async(user, password) => {
    try {
      const response = await fetchData.post('/pub/user/login', {
        username: user,
        password: password
      });

      const decodedToken = jwtDecode(response.data.data.access_token); // Mendekode token JWT untuk membaca informasi

      // Mengatur token setelah login berhasil
      setToken({
          accessToken: response.data.data.access_token,
          refreshToken: response.data.data.refresh_token,
          userId: decodedToken.sub
      });

      return response;
    } catch(error) {
      try {
        const jsonMatch = error.response.data.data.match(/\{.*\}/);
        if (jsonMatch) {
          const parsedData = JSON.parse(jsonMatch[0]);
          return {status:'FAILED', data: parsedData.error_description};
        } else {
          return {status:'FAILED', data: error.message};
        }
      } catch (e) {
        return {status:'FAILED', data: error.message};
      }
    }
  }

  const register = async(user) => {
    try {
      const response = await fetchData.post('/pub/user/register', {
        username: user.username,
        password: user.password,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        emailVerified: false,
        enabled: true,
        credentials:[{
          temporary: false,
          type: 'password',
          value: user.password
        }]
      });

      return response;
    } catch(error) {
      return error.response.data;
    }
  }

  const cek = async () => {
  }

  return (
    <AppContext.Provider value={{onLogin:login, onLogout:logout, onRegister:register, token, onCheck:cek, data, setData}}>{children}</AppContext.Provider>
  );
}