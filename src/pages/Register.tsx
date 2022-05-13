import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm";
import { AuthContext } from "../context/AuthProvider";

const Register: React.FC<{}> = () => {
  const { username, token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username && token) return navigate("/home");
  }, []);

  return (
    <div className="pt-28 items-center justify-center w-full  bg-green-100 flex flex-col pb-32">
      <RegisterForm />
    </div>
  );
};

export default Register;
