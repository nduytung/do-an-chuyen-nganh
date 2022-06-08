import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import PrimaryBtn from "./ProjectDetail/PrimaryBtn";
import WhiteBgBtn from "./ProjectDetail/WhiteBgBtn";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BASE_URL } from "../routes/baseURL";

const Header = () => {
  const logo = require("./logo.png");

  const { isLoggedIn, username, fullname, token, userId } =
    useContext(AuthContext);

  const [openNav, setOpenNav] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const handleLogout = () => {
    username && localStorage.removeItem("username");
    fullname && localStorage.removeItem("fullname");
    token && localStorage.removeItem("token");
    userId && localStorage.removeItem("userId");
    window.location.reload();
  };

  const handleCreateProject = () => {
    if (isLoggedIn) navigate(BASE_URL.NEW_PROJECT);
    else navigate(BASE_URL.LOGIN);
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="py-8 bg-white w-full  shadow-2xl  fixed z-[100] px-6">
        <div className="container mx-auto flex justify-between">
          <button
            onClick={() => navigate(BASE_URL.LANDING)}
            className="hover:cursor-pointer hover:opacity-90 my-3"
          >
            <img src={logo} className="w-36" />
          </button>

          {/* modal for mobile */}
          <article className={`${openNav ? "block" : "hidden"} lg:hidden`}>
            <div
              onClick={() => setOpenNav(false)}
              className="bg-black opacity-50 lg:hidden absolute min-h-screen top-24 bottom-0 left-0 right-0"
            ></div>

            <ul
              className={`shadow-2xl h-auto p-5 w-full lg:hidden absolute top-24 bg-white z-[1] left-0  transition-all duration-500 ease-in
                
              `}
            >
              <li className="py-4 active:bg-[#02a95c] border-b border-gray-400 ">
                <a className="tracking-widest text-lg">Home</a>
              </li>
              <li className="py-4 active:bg-[#02a95c] border-b border-gray-400">
                <button
                  className="tracking-widest text-lg"
                  onClick={() => navigate(BASE_URL.DASHBOARD)}
                >
                  Dashboard
                </button>
              </li>
              <li className="py-4  border-b border-gray-400">
                <a className="tracking-widest text-lg">Explore</a>
              </li>
              <li className="py-4 active:bg-[#02a95c] border-b border-gray-400">
                <button
                  className="tracking-widest text-lg"
                  onClick={() => navigate(BASE_URL.ABOUT)}
                >
                  About
                </button>
              </li>

              <li className="py-4">
                <PrimaryButton
                  nameBtn="Add a Project"
                  type="DEFAULT"
                  classname="w-fit mt-3 active:opacity-80"
                />
              </li>
            </ul>
          </article>

          {/* responsive laptop,ipad pro */}
          <ul className="hidden xl:ml-16 lg:ml-5 w-6/12 xl:mr-8 lg:mr-7 my-auto lg:flex flex-row">
            <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle  ">
              <a className="tracking-widest text-lg transition ease-in-out duration-200 ">
                Home
                <div className="mt-4 w-8/12  h-[2.5px] bg-[#02a95c] absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 " />
              </a>
            </li>
            <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle">
              <a className="tracking-widest text-lg" href="/dashboard">
                Dashboard
                <div className="mt-4 w-8/12  h-[2.5px] bg-[#02a95c] absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 " />
              </a>
            </li>
            <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle ">
              <a className="tracking-widest text-lg">Explore</a>
              <div className="mt-4 w-8/12  h-[2.5px] bg-[#02a95c] absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 " />
              <ul className="absolute mt-5 w-36 h-[164px] bg-white shadow-xl rounded-lg opacity-0 invisible group-active:opacity-100 group-hover:opacity-100 group-active:visible group-hover:visible duration-300 max-h-0 group-hover:max-h-48 ">
                <li>
                  <button
                    className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                    onClick={() => navigate(BASE_URL.ALL_PROJECT)}
                  >
                    All Projects
                  </button>
                </li>
                <li>
                  <button
                    className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                    onClick={() => navigate(BASE_URL.BOOKMARK)}
                  >
                    Bookmark
                  </button>
                </li>
                <li></li>
                <li>
                  <button
                    className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest "
                    onClick={() => navigate(BASE_URL.NEW_PROJECT)}
                  >
                    Add a project
                  </button>
                </li>
              </ul>
            </li>
            <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle ">
              <button
                className="tracking-widest text-lg"
                onClick={() => navigate(BASE_URL.ABOUT)}
              >
                About
                <div className="mt-4 w-8/12  h-[2.5px] bg-[#02a95c] absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 " />
              </button>
            </li>
          </ul>

          {/* responsive sm, ipad */}
          <button className="lg:hidden">
            <GiHamburgerMenu
              className="w-8 h-8"
              onClick={() => setOpenNav(!openNav)}
            />
          </button>

          <div className="hidden lg:flex gap-5">
            <PrimaryBtn
              classname="my-auto xl:w-auto xl:ml-1 lg:ml-0 xl:h-auto lg:h-0 lg:w-0 xl:visible lg:invisible"
              callback={handleCreateProject}
            >
              Add a Project
            </PrimaryBtn>

            {/* Search Button */}
            {/* <div className="lg:ml-8 xl:ml-8 bg-slate-200 rounded-full my-auto p-2.5 align-middle hover:cursor-pointer hover:opacity-70 sm:invisible xl:visible lg:visible">
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
        </div> */}

            {/* Profile */}
            {!isLoggedIn ? (
              <WhiteBgBtn
                callback={() => navigate(BASE_URL.LOGIN)}
                classname=" rounded-full  p-2.5 hover:cursor-pointer  hover:opacity-70"
              >
                Login
              </WhiteBgBtn>
            ) : (
              <div className="flex flex-col">
                <button
                  onClick={() => setLogoutModal(!logoutModal)}
                  className="bg-white relative rounded-full p-4 border border-gray-300 text-lg text-center"
                >
                  <AiOutlineUser />{" "}
                </button>
                {logoutModal && (
                  <div className="bg-white rounded-md absolute p-4 border border-gray-300 mt-16 ">
                    <button onClick={handleLogout}>Đăng xuất</button>
                    <hr className="my-2 border border-gray-300" />
                    <button
                      onClick={() => navigate(`${BASE_URL.PROFILE}/${userId}`)}
                    >
                      Xem trang cá nhân
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
