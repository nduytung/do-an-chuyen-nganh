import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { AuthContext } from "../context/AuthProvider";
import { BASE_URL } from "../routes/baseURL";

const Login: React.FC<{}> = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate(BASE_URL.LANDING);
  }, []);
  return (
    <div className="pt-28 items-center justify-center w-full  bg-green-100 flex flex-col pb-32">
      <LoginForm />
    </div>
  );
};

export default Login;
