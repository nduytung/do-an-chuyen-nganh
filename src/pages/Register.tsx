import React from "react";
import { RegisterForm } from "../components/RegisterForm";

const Register: React.FC<{}> = () => {
  return (
    <div className="pt-28 items-center justify-center w-full  bg-green-100 flex flex-col pb-32">
      <RegisterForm />
    </div>
  );
};

export default Register;
