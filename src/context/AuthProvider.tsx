import React, { createContext, useEffect, useState } from "react";

export interface IDefaultValue {
  username: string | null;
  token: string | null;
  fullname: string | null;
  handleSetToken: (token: string) => void;
  handleSetUsername: (username: string) => void;
  handleSetFullname: (fullname: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: IDefaultValue = {
  username: localStorage.getItem("username") || null,
  token: localStorage.getItem("token") || null,
  fullname: localStorage.getItem("fullname") || null,
  handleSetToken: () => undefined,
  handleSetUsername: () => undefined,
  handleSetFullname: () => undefined,
  isLoggedIn:
    localStorage.getItem("username") &&
    localStorage.getItem("fullname") &&
    localStorage.getItem("token")
      ? true
      : false,
  setIsLoggedIn: () => false,
};

export const AuthContext = createContext(defaultValue);

const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const { username, token, fullname } = defaultValue;
  const [isLoggedIn, setIsLoggedIn] = useState(defaultValue.isLoggedIn);

  const handleSetToken = (token: string) => {
    localStorage.setItem("token", token);
  };
  const handleSetUsername = (username: string) => {
    localStorage.setItem("username", username);
  };
  const handleSetFullname = (fullname: string) => {
    localStorage.setItem("fullname", fullname);
  };

  return (
    <AuthContext.Provider
      value={{
        handleSetToken,
        username,
        token,
        fullname,
        handleSetUsername,
        handleSetFullname,
        setIsLoggedIn,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
