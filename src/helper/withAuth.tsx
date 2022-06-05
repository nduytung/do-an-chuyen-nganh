import { ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const WithAuth = ({ Component }: { Component: any }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const AuthWrapper: any = () => {
    if (!isLoggedIn) return navigate("/login");
    return <Component />;
  };

  return AuthWrapper;
};

export default WithAuth;
