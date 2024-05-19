import axios from "axios";
import { createContext, useContext, useState } from "react";
import ENV from "../constants/env";

export const AppContext = createContext({});

export const useAppContext = () => {
  return useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState({accessToken:null, refreshToken:null});

  const logout = async () => {
    try {
      const response = await axios.post(`${ENV.BASE_URL}/api/user/logout`, {
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
        refreshToken:null
      });

      return response;
    } catch(error) {
      return error.response.data;
    }
  }

  const login = async(user, password) => {
    try {
      const response = await axios.post(`${ENV.BASE_URL}/api/user/login`, {
        username: user,
        password: password
      });

      // Mengatur token setelah login berhasil
      setToken({
          accessToken: response.data.data.access_token,
          refreshToken: response.data.data.refresh_token
      });

      return response;
    } catch(error) {
      return error.response.data;
    }
  }

  const cek = async () => {
    console.log({token});
  }

  return (
    <AppContext.Provider value={{onLogin:login, onLogout:logout, token, onCheck:cek}}>{children}</AppContext.Provider>
  );
}