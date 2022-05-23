import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const logo = require("./logo.png");

  const { token, username } = useContext(AuthContext);

  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="laptop:w-full py-2 bg-white  shadow-2xl  fixed z-[100] flex flex-row iphone:h-20 iphone:w-[414px] iphone:items-center">
      <a href="" className="hover:cursor-pointer hover:opacity-90 my-3">
        <img
          src={logo}
          className=" ml-4 laptop:pl-10 iphone:pl-3 iphone:h-auto laptop:h-auto laptop:w-40 iphone:w-[290px]  "
        />
      </a>

      <a
        onClick={() => setOpenNav(true)}
        className="iphone:absolute iphone:right-14 laptop:invisible iphone:hover:cursor-pointer rounded border p-1"
      >
        <GiHamburgerMenu className="w-5 h-5" />
      </a>

      <ul className=" ml-16 w-6/12 mr-12 iphone:invisible laptop:visible my-auto flex flex-row">
        <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle  ">
          <a className="tracking-widest text-lg transition ease-in-out duration-200 ">
            Home
          </a>
          <div className="-mt-3 w-8/12 h-[2.5px] bg-[#02a95c] absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-300  " />
          <ul className="absolute mt-0.5 w-36 h-[164px] bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 max-h-0 group-hover:max-h-48">
            <li>
              <a
                className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                href=""
              >
                Home 1
              </a>
            </li>
            <li>
              <a
                className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                href=""
              >
                Home 2
              </a>
            </li>
            <li>
              <a
                className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                href=""
              >
                Home 3
              </a>
            </li>
            <li>
              <a
                className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                href=""
              >
                Home 4
              </a>
            </li>
          </ul>
        </li>
        <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle">
          <a className="tracking-widest text-lg" href="/dashboard">
            Dashboard
          </a>
        </li>
        <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle ">
          <a className="tracking-widest text-lg" href="">
            Explore
          </a>
          <div className="-mt-3 w-8/12  h-[2.5px] bg-[#02a95c] absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-300 " />
          <ul className="absolute mt-0.5 w-36 h-[164px] bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 max-h-0 group-hover:max-h-48 ">
            <li>
              <a
                className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                href="/project/all"
              >
                All Projects
              </a>
            </li>
            <li>
              <a
                className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                href="/bookmark"
              >
                Bookmark
              </a>
            </li>
            <li>
              <a
                className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                href=""
              >
                Profile
              </a>
            </li>
            <li>
              <a
                className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                href=""
              >
                Add a project
              </a>
            </li>
          </ul>
        </li>
        <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle ">
          <a className="tracking-widest text-lg" href="">
            Pages
          </a>
          <div className="-mt-3 w-8/12  h-[2.5px] bg-[#02a95c] absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-300 " />
          <ul className="absolute mt-0.5 w-44 h-[164px] bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 max-h-0 group-hover:max-h-48 ">
            <li>
              <a
                className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                href=""
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                href=""
              >
                Career
              </a>
            </li>
            <li>
              <a
                className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                href=""
              >
                Company Overview
              </a>
            </li>
          </ul>
        </li>
        <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle">
          <a className="tracking-widest text-lg" href="">
            Contact
          </a>
          <div className="-mt-3 w-8/12  h-[2.5px] bg-[#02a95c] absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 " />
        </li>
      </ul>

      <PrimaryButton
        type="DEFAULT"
        classname="my-auto ml-1 iphone:invisible laptop:visible"
        nameBtn="Add a Project"
      />

      {/* Search Button */}
      <div className=" ml-8 bg-slate-200 rounded-full my-auto p-2.5 align-middle hover:cursor-pointer hover:opacity-70 iphone:invisible laptop:visible">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </a>
      </div>

      {/* Profile */}
      <div className=" ml-6 my-auto justify-center flex group iphone:invisible laptop:visible ">
        <div className=" bg-slate-200 rounded-full  p-2.5 hover:cursor-pointer hover:opacity-70">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Profile */}
      <div className=" ml-6 my-auto justify-center flex group  ">
        <div className=" bg-slate-200 rounded-full  p-2.5 hover:cursor-pointer hover:opacity-70">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </div>
        {!token || !username ? (
          <div className="w-28  pl-4 mt-12 bg-white absolute mr-16 rounded-lg flex flex-col justify-center divide-solid divide-y pr-4 shadow-xl opacity-0 group-hover:opacity-100  duration-300">
            <a className="flex-1 py-2 hover:text-[#02a95c]" href="/login">
              Login
            </a>
            <a className="flex-1 py-2 hover:text-[#02a95c]" href="/register">
              Register
            </a>
          </div>
        ) : (
          <p>Welcome back, {username} </p>
        )}
      </div>
    </div>
  );
};

export default Header;
