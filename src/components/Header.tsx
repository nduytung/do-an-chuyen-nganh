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
      <div className="xl:w-full lg:w-full md:w-full py-8 bg-white iphone:border-b-2 iphone:border-[#02a95c] shadow-2xl  fixed z-[100] iphone:h-20 iphone:w-[414px] iphone:items-center">
        <div className="container mx-auto flex flex-row">
          <button
            onClick={() => navigate(BASE_URL.LANDING)}
            className="hover:cursor-pointer hover:opacity-90 my-3"
          >
            <img
              src={logo}
              className=" ml-4 xl:pl-10 lg:pl-10 md:pl-10 iphone:pl-3 iphone:h-auto xl:h-auto lg:h-auto md:h-auto xl:w-40 lg:w-40 md:w-40 iphone:w-[290px]  "
            />
          </button>

          {/* responsive iphone, ipad */}
          <a
            onClick={() => setOpenNav(!openNav)}
            className="iphone:absolute iphone:right-7 xl:invisible lg:invisible iphone:hover:cursor-pointer rounded border p-1"
          >
            {!openNav && <GiHamburgerMenu className="w-5 h-5" />}

            {openNav && <AiOutlineClose className="w-5 h-5" />}
          </a>

          <ul
            onClickCapture={() => setOpenNav(!openNav)}
            className={`xl:invisible lg:invisible  shadow-2xl h-auto iphone:w-9/12 md:w-5/12 absolute bg-white z-[1] left-0  transition-all duration-500 ease-in iphone:top-20 ${
              openNav ? "left-0 " : "iphone:left-[-490px] md:left-[-350px]"
            }`}
          >
            <li className="py-4 active:bg-[#02a95c] border-b border-gray-400 ">
              <a className="ml-5 tracking-widest text-lg">Home</a>
            </li>
            <li className="py-4 active:bg-[#02a95c] border-b border-gray-400">
              <button
                className="ml-5 tracking-widest text-lg"
                onClick={() => navigate(BASE_URL.DASHBOARD)}
              >
                Dashboard
              </button>
            </li>
            <li className="py-4  border-b border-gray-400">
              <a className="ml-5 tracking-widest text-lg">Explore</a>
              <li className=" ml-10 flex flex-col">
                <button
                  className="mt-2 w-5/12 border-b-2 active:bg-[#02a95c]"
                  onClick={() => navigate(BASE_URL.ALL_PROJECT)}
                >
                  All Project
                </button>
                <button
                  className="mt-2 w-5/12 border-b-2 active:bg-[#02a95c]"
                  onClick={() => navigate(BASE_URL.BOOKMARK)}
                >
                  Bookmark
                </button>
                <button
                  onClick={() => navigate(BASE_URL.PROFILE)}
                  className="mt-2 w-5/12 border-b-2 active:bg-[#02a95c]"
                >
                  Profile
                </button>
                <button
                  onClick={() => navigate(BASE_URL.NEW_PROJECT)}
                  className="mt-2 w-5/12 border-b-2 active:bg-[#02a95c]"
                >
                  Add a Project
                </button>
              </li>
            </li>
            <li className="py-4 active:bg-[#02a95c] border-b border-gray-400">
              <button
                className="ml-5 tracking-widest text-lg"
                onClick={() => navigate(BASE_URL.ABOUT)}
              >
                About
              </button>
            </li>

            <li className="py-4 ">
              <PrimaryButton
                nameBtn="Add a Project"
                type="DEFAULT"
                classname="w-fit ml-5 mt-3 active:opacity-80"
              />
            </li>
          </ul>

          {/* responsive laptop,ipad pro */}
          <ul className=" xl:ml-16 lg:ml-5 w-6/12 xl:mr-8 lg:mr-7 iphone:invisible xl:visible lg:visible my-auto flex flex-row">
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

          <div className="flex gap-5">
            <PrimaryBtn
              classname="my-auto xl:w-auto xl:ml-1 lg:ml-0 xl:h-auto lg:h-0 lg:w-0 iphone:invisible xl:visible lg:invisible"
              callback={handleCreateProject}
            >
              Add a Project
            </PrimaryBtn>

            {/* Search Button */}
            {/* <div className="lg:ml-8 xl:ml-8 bg-slate-200 rounded-full my-auto p-2.5 align-middle hover:cursor-pointer hover:opacity-70 iphone:invisible xl:visible lg:visible">
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
