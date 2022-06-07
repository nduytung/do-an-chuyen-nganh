import React, { createContext, useEffect, useState } from "react";

export interface IDefaultValue {
  username: string | null;
  token: string | null;
  fullname: string | null;
  userId: string | null;
  userProfile: any;
  handleSetToken: (token: string) => void;
  handleSetUsername: (username: string) => void;
  handleSetFullname: (fullname: string) => void;
  handleSetUserId: (userId: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserProfile: React.Dispatch<React.SetStateAction<any>>;
}

const defaultValue: IDefaultValue = {
  username: localStorage.getItem("username") || null,
  token: localStorage.getItem("token") || null,
  fullname: localStorage.getItem("fullname") || null,
  userId: localStorage.getItem("userId") || null,
  userProfile: null,
  handleSetToken: () => undefined,
  handleSetUsername: () => undefined,
  handleSetFullname: () => undefined,
  handleSetUserId: () => undefined,
  setUserProfile: () => null,
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
  const { username, token, fullname, userId } = defaultValue;
  const [isLoggedIn, setIsLoggedIn] = useState(defaultValue.isLoggedIn);
  const [userProfile, setUserProfile] = useState(defaultValue.userProfile);
  const handleSetToken = (token: string) => {
    localStorage.setItem("token", token);
  };
  const handleSetUsername = (username: string) => {
    localStorage.setItem("username", username);
  };
  const handleSetFullname = (fullname: string) => {
    localStorage.setItem("fullname", fullname);
  };

  const handleSetUserId = (userId: string) => {
    localStorage.setItem("userId", userId);
  };

  return (
    <AuthContext.Provider
      value={{
        handleSetToken,
        username,
        token,
        fullname,
        userId,
        userProfile,
        setUserProfile,
        handleSetUsername,
        handleSetFullname,
        handleSetUserId,
        setIsLoggedIn,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
