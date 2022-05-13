import React, { useContext } from "react";
import { Form, useFormik } from "formik";
import { toast } from "react-toastify";

import * as Yup from "yup";
import { handleApi } from "../api/handleApi";
import { Navigate, Router, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export const inputCSS: string =
  "mt-1 mb-3 border border-gray-300 rounded-md py-2 px-4 border-solid outline-none";
export const RegisterForm = () => {
  const navigate = useNavigate();
  const { handleSetToken } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      fullname: "",
      username: "",
      phonenumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .required("Required")
        .min(10, "Must be 10 characters or more"),
      username: Yup.string()
        .required("Require")
        .min(4, "At least 4 characters"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address!"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Please enter valid Password!"
        ),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
      phonenumber: Yup.string()
        .required("Required")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number!"
        ),
    }),

    onSubmit: async (values) => {
      const data = await handleApi({
        method: "post",
        payload: values,
        endpoint: "auth/register",
      });
      console.log(data);

      if (data) {
        handleSetToken(data.data.propsue);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    },
  });

  return (
    <section className="bg-white w-1/3 p-8 justify-center items-center pb-6 rounded-xl shadow-2xl shadow-gray-400">
      <div className="flex justify-center items-center w-full">
        <div>
          Already have an account?{" "}
          <a href="" className="hover:cursor-pointer text-[#02a95c] font-bold ">
            Login
          </a>
        </div>
      </div>
      <hr className="border border-gray-100 my-6" />
      <div className="text-3xl mt-2 font-bold tracking-widest text-center">
        REGISTER
      </div>
      <form
        className=" w-full mt-8 flex flex-col pb-3"
        onSubmit={formik.handleSubmit}
      >
        <label className="mt-3 text-lg " htmlFor="">
          Your Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          placeholder="Enter your username"
          className={inputCSS}
        />
        {formik.errors.username && (
          <p className="text-red-600 text-xs ml-[10px]">
            {formik.errors.username}
          </p>
        )}

        <label className=" mt-3 text-lg " htmlFor="">
          Your Fullname
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formik.values.fullname}
          onChange={formik.handleChange}
          placeholder="Enter your fullname"
          className={inputCSS}
        />
        {formik.errors.fullname && (
          <p className="text-red-600 text-xs ml-[10px]">
            {formik.errors.fullname}
          </p>
        )}

        <label className=" mt-3 text-lg " htmlFor="">
          Your Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
          className={inputCSS}
        />
        {formik.errors.email && (
          <p className="text-red-600 text-xs ml-[10px]">
            {formik.errors.email}
          </p>
        )}

        <label className=" mt-3 text-lg " htmlFor="">
          Your Phone
        </label>
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          value={formik.values.phonenumber}
          onChange={formik.handleChange}
          placeholder="Enter your Phone number"
          className={inputCSS}
        />
        {formik.errors.phonenumber && (
          <p className="text-red-600 text-xs ml-[10px]">
            {formik.errors.phonenumber}
          </p>
        )}

        <label className=" mt-3 text-lg " htmlFor="">
          Your Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your Password"
          className={inputCSS}
        />
        {formik.errors.password && (
          <p className="text-red-600 text-xs ml-[10px]">
            {formik.errors.password}
          </p>
        )}

        <label className=" mt-3 text-lg " htmlFor="">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          placeholder="Confirm your Password"
          className={inputCSS}
        />
        {formik.errors.confirmPassword && (
          <p className="text-red-600 text-xs ml-[10px]">
            {formik.errors.confirmPassword}
          </p>
        )}

        <button
          type="submit"
          className="bg-[#02a95c] w-fit rounded-xl p-2 mt-3 place-self-end text-white hover:opacity-80 mr-5 "
        >
          Create Account
        </button>
      </form>
    </section>
  );
};
