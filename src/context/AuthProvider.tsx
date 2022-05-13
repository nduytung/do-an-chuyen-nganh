import React, { createContext } from "react";

export interface IDefaultValue {
  username: string | null;
  token: string | null;
  handleSetToken: (token: string) => void;
  handleSetUsername: (username: string) => void;
}

const defaultValue: IDefaultValue = {
  username: localStorage.getItem("username") || null,
  token: localStorage.getItem("token") || null,
  handleSetToken: () => undefined,
  handleSetUsername: () => undefined,
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

  return (
    <AuthContext.Provider
      value={{ handleSetToken, username, token, handleSetUsername }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
