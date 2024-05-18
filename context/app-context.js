import { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export const useAppContext = () => {
  return useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState({accessToken:null, refreshToken:null});

  const logout = async () => {
    setToken({accessToken:null, refreshToken:null});
  }

  const login = async () => {
    setToken({accessToken:'--ini access token--', refreshToken:'--ini refresh token--'});
  }

  const cek = async () => {
    console.log({token});
  }

  return (
    <AppContext.Provider value={{onLogin:login, onLogout:logout, token, onCheck:cek}}>{children}</AppContext.Provider>
  );
}