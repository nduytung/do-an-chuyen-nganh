import { Form } from "formik";
import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";


/* type MyFormValues = {
    email: string,
    fullname: string,
    username: string,
    phonenumber: string,
    password: string,
    confirmPassword: string,
    onSubmit: void
}

const initialValues : MyFormValues={
    email: "",
    fullname: "",
    username: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
    onSubmit: undefined
} */

export const RegisterForm = () => {

    const inputCSS : string = "w-11/12 my-1 ml-3 border-b border-black border-solid outline-none text-sm py-1"

    const formik = useFormik({
        initialValues: {
            email: '',
            fullname: '',
            username: '',
            phonenumber: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Required").min(10, "Must be 10 characters or more"),
            username: Yup.string().required("Require").min(4, "At least 4 characters"),
            email: Yup.string().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address!"),
            password: Yup.string().required("Required").matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/, "Please enter valid Password!"),
            confirmPassword: Yup.string().required("Required").oneOf([Yup.ref("password"),null], "Password must match"),
            phonenumber: Yup.string().required("Required").matches( /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Must be a valid phone number!")
        }),
        onSubmit: (values) => {
            window.alert("Form Submited")
            console.log(values);
          },
    })

    console.log(formik.values)

    return (
        <section className="bg-white w-4/12 flex justify-center items-center pb-6 rounded-xl shadow-2xl shadow-gray-400 flex-col">
            <div className="flex justify-center items-center border-b h-16 w-full">
                <div>Have an account? <a href="" className="hover:cursor-pointer text-[#02a95c] font-bold ">Log in</a></div>
            </div>
            <div className="">SIGN UP</div>
            <form className=" w-11/12  flex flex-col pb-3" onSubmit={formik.handleSubmit}>
                <label className="ml-2 mt-2 text-lg font-semibold" htmlFor="" >Your Username</label>
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

                <label className="ml-2 mt-2 text-lg font-semibold" htmlFor="" >Your Fullname</label>
                <input 
                    type="text" 
                    id="fullname" 
                    name="fullname"
                    value={formik.values.fullname} 
                    onChange={formik.handleChange}
                    placeholder="Enter your fullname"
                    className={inputCSS}/>
                {formik.errors.fullname && (
                    <p className="text-red-600 text-xs ml-[10px]">{formik.errors.fullname}</p>
                )}

                <label className="ml-2 mt-2 text-lg font-semibold" htmlFor="" >Your Email</label>
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange} 
                    placeholder="Enter your email"
                    className={inputCSS}/>
                {formik.errors.email && (
                    <p className="text-red-600 text-xs ml-[10px]">{formik.errors.email}</p>
                )}

                <label className="ml-2 mt-2 text-lg font-semibold" htmlFor="" >Your Phone</label>
                <input 
                    type="text" 
                    id="phonenumber" 
                    name="phonenumber" 
                    value={formik.values.phonenumber}
                    onChange={formik.handleChange}
                    placeholder="Enter your Phone number"
                    className={inputCSS}/>
                {formik.errors.phonenumber && (
                    <p className="text-red-600 text-xs ml-[10px]">{formik.errors.phonenumber}</p>
                )}

                <label className="ml-2 mt-2 text-lg font-semibold" htmlFor="" >Your Password</label>
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

                <label className="ml-2 mt-2 text-lg font-semibold" htmlFor="" >Confirm Password</label>
                <input 
                    type="password"  
                    id="confirmPassword" 
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange} 
                    placeholder="Confirm your Password"
                    className={inputCSS}/>
                {formik.errors.confirmPassword && (
                    <p className="text-red-600 text-xs ml-[10px]">{formik.errors.confirmPassword}</p>
                )}

                {/* <a type="submit" className="hover:cursor-pointer">Continue</a> */}
                <button type="submit" className="bg-[#02a95c] w-fit rounded-xl p-2 mt-3 place-self-end text-white hover:opacity-80 " >Create Account</button>
            </form>
        </section>
    )
}