import React from "react";
import { RegisterForm } from "../components/RegisterForm";
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';

  

const Register: React.FC<{}> = () => {

  return <div className="pt-28 items-center justify-center w-full  bg-green-100 flex flex-col pb-32">
    <RegisterForm/>
  </div>;
};

export default Register;