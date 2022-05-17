import React, { createContext } from "react";

export interface IDefaultValue {
  username: string | null;
  token: string | null;
  handleSetToken: (token: string) => void;
  handleSetUsername: (username: string) => void;
  handleSetFullname: (fullname: string) => void;
}

const defaultValue: IDefaultValue = {
  username: localStorage.getItem("username") || null,
  token: localStorage.getItem("token") || null,
  handleSetToken: () => undefined,
  handleSetUsername: () => undefined,
  handleSetFullname: () => undefined,
};

export const AuthContext = createContext(defaultValue);

const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const { username, token } = defaultValue;

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
        handleSetUsername,
        handleSetFullname,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
