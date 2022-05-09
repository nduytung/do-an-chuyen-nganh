import React from "react";
import { LoginForm } from "../components/LoginForm";



const Login: React.FC<{}> = () => {

  return <div className="pt-28 items-center justify-center w-full  bg-green-100 flex flex-col pb-32">
    <LoginForm/>
  </div>;
};

export default Login;