import { Form, useFormik } from 'formik';
import React from "react";

import * as Yup from "yup";

export const LoginForm = () => {

    const inputCSS : string = "w-11/12  my-1 ml-3 border-b border-black border-solid outline-none text-sm py-1"

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required"),
            password: Yup.string().required("Required")
        }),
        onSubmit: (values) => {
            window.alert("Form Submited")
            console.log(values);
          },
    })

    console.log(formik.values)

    return (
        <section className="bg-white xl:w-4/12 lg:w-4/12 md:w-7/12 iphone:w-10/12 flex justify-center items-center pb-6 rounded-xl shadow-2xl shadow-gray-400 flex-col">
            <div className="flex justify-center items-center border-b h-16 w-full">
                <div>Don't have an account. <a href="/register" className="hover:cursor-pointer text-[#02a95c] font-bold ">Register</a></div>
            </div>
            <div className="text-2xl mt-2 font-bold tracking-widest">LOGIN</div>
            <form className=" w-11/12  flex flex-col pb-3" onSubmit={formik.handleSubmit}>
                <label className="ml-2 mt-3 text-lg font-semibold" htmlFor="" >Your Username</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    placeholder="Enter your username"
                    className={inputCSS}/>
                {formik.errors.username && (
                    <p className="text-red-600 text-xs ml-[10px]">{formik.errors.username}</p>
                )}

                <label className="ml-2 mt-3 text-lg font-semibold" htmlFor="" >Your Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange} 
                    placeholder="Enter your Password"
                    className={inputCSS}/>
                {formik.errors.password && (
                    <p className="text-red-600 text-xs ml-[10px]">{formik.errors.password}</p>
                )}

                <button type="submit" className="bg-[#02a95c] w-fit rounded-xl p-2 mt-3 place-self-end text-white hover:opacity-80 mr-5 " >Login</button>
            </form>
        </section>
    )
}