import { Form, useFormik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { handleApi } from "../api/handleApi";
import { AuthContext } from "../context/AuthProvider";
import { BASE_URL } from "../routes/baseURL";
import PrimaryBtn from "./ProjectDetail/PrimaryBtn";
import { inputCSS } from "./RegisterForm";
export const LoginForm = () => {
  const navigate = useNavigate();
  const {
    handleSetToken,
    handleSetUsername,
    handleSetFullname,
    handleSetUserId,
  } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      await handleSubmit({ ...values });
    },
  });

  const handleSubmit = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const data = await handleApi({
      method: "post",
      payload: { username, password },
      endpoint: "auth/login",
    });
    if (data) {
      console.log(data);
      handleSetToken(data.data.props.token);
      handleSetUsername(data.data.props.username);
      handleSetFullname(data.data.props.fullname);
      handleSetUserId(data.data.props._id);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <section className="bg-white w-4/12 flex justify-center items-center pb-6 rounded-xl shadow-2xl shadow-gray-400 flex-col">
      <div className="flex justify-center items-center border-b h-16 w-full">
        <div>
          Don't have an account?.{" "}
          <a
            href="/register"
            className="hover:cursor-pointer text-[#02a95c] font-bold "
          >
            Register
          </a>
        </div>
      </div>
      <div className="text-2xl mt-2 font-bold tracking-widest">LOGIN</div>
      <form
        className=" w-11/12  flex flex-col pb-3"
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

        <label className="mt-3 text-lg " htmlFor="">
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

        <PrimaryBtn callback={() => {}}> Login </PrimaryBtn>
      </form>
    </section>
  );
};
