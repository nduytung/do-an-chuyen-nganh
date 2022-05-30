import React, { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";



const Header = () => {

  const [openNav, setOpenNav] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const logo = require('./logo.png');


  

  return <div className="xl:w-full lg:w-full md:w-full py-2 bg-white iphone:border-b-2 iphone:border-[#02a95c] shadow-2xl  fixed z-[100] flex flex-row iphone:h-20 iphone:w-[414px] iphone:items-center">
    <a href="" className="hover:cursor-pointer hover:opacity-90 my-3">
      <img src={logo} className=" ml-4 xl:pl-10 lg:pl-10 md:pl-10 iphone:pl-3 iphone:h-auto xl:h-auto lg:h-auto md:h-auto xl:w-40 lg:w-40 md:w-40 iphone:w-[290px]  " />
    </a>
    
    {/* responsive iphone, ipad */}
    <a onClick={()=>setOpenNav(!openNav)} className="iphone:absolute iphone:right-7 xl:invisible lg:invisible iphone:hover:cursor-pointer rounded border p-1">
      {
        !openNav && <GiHamburgerMenu className="w-5 h-5"/>
      }
      
      {
        openNav && <AiOutlineClose className="w-5 h-5" />
      }
    </a>
    
    <ul onClickCapture={()=>setOpenNav(!openNav)} className={`xl:invisible lg:invisible  shadow-2xl h-auto iphone:w-9/12 md:w-5/12 absolute bg-white z-[1] left-0  transition-all duration-500 ease-in iphone:top-20 ${openNav ? 'left-0 ':'iphone:left-[-490px] md:left-[-350px]'}`}>
      <li className="py-4 active:bg-[#02a95c] border-b border-gray-400 " >
        <a className="ml-5 tracking-widest text-lg">
          Home
        </a>
      </li>
      <li className="py-4 active:bg-[#02a95c] border-b border-gray-400" >
        <a className="ml-5 tracking-widest text-lg"href="/dashboard">
          Dashboard
        </a>
      </li>
      <li className="py-4  border-b border-gray-400" >
        <a className="ml-5 tracking-widest text-lg">
          Explore
        </a>
        <li className=" ml-10 flex flex-col">
          <a className="mt-2 w-5/12 border-b-2 active:bg-[#02a95c]" href="/project/all">All Project</a>
          <a className="mt-2 w-5/12 border-b-2 active:bg-[#02a95c]" href="/bookmark">Bookmark</a>
          <a className="mt-2 w-5/12 border-b-2 active:bg-[#02a95c]">Profile</a>
          <a className="mt-2 w-5/12 border-b-2 active:bg-[#02a95c]">Add a Project</a>
        </li>
      </li>
      <li className="py-4 active:bg-[#02a95c] border-b border-gray-400" >
        <a className="ml-5 tracking-widest text-lg" href="/about">
          About
        </a>
      </li>
      <li className="py-4 active:bg-[#02a95c]" >
        <a className="ml-5 tracking-widest text-lg">
          Contact
        </a>
      </li>
      <li className="py-4 " >
        <PrimaryButton nameBtn="Add a Project" type="DEFAULT" classname="w-fit ml-5 mt-3 active:opacity-80"/>
      </li>
    </ul>

      {/* responsive laptop,ipad pro */}
    <ul className=" xl:ml-16 lg:ml-5 w-6/12 xl:mr-8 lg:mr-7 iphone:invisible xl:visible lg:visible my-auto flex flex-row">
      <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle  ">
        <a className="tracking-widest text-lg transition ease-in-out duration-200 " >Home
        <div className="mt-4 w-8/12  h-[2.5px] bg-[#02a95c] absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 "/>
        </a>
        
      </li>
      <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle">
        <a className="tracking-widest text-lg" href="/dashboard">Dashboard
        <div className="mt-4 w-8/12  h-[2.5px] bg-[#02a95c] absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 "/>
        </a>
      </li>
      <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle ">
        <a className="tracking-widest text-lg" >Explore</a>
        <div className="mt-4 w-8/12  h-[2.5px] bg-[#02a95c] absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 "/>
        <ul className="absolute mt-5 w-36 h-[164px] bg-white shadow-xl rounded-lg opacity-0 invisible group-active:opacity-100 group-hover:opacity-100 group-active:visible group-hover:visible duration-300 max-h-0 group-hover:max-h-48 ">
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="/project/all">All Projects</a></li>
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="/bookmark">Bookmark</a></li>
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Profile</a></li>
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Add a project</a></li>
        </ul>
      </li>
      <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle ">
        <a className="tracking-widest text-lg" href="/about">About
        <div className="mt-4 w-8/12  h-[2.5px] bg-[#02a95c] absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 "/>
        </a>
        
      </li>
      <li className="  no-underline px-5 relative group hover:cursor-pointer justify-center align-middle">
        <a className="tracking-widest text-lg" href="">Contact</a>
        <div className="mt-4 w-8/12  h-[2.5px] bg-[#02a95c] absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 "/>
      </li>
    </ul>

    <PrimaryButton type="DEFAULT" classname="my-auto xl:w-auto xl:ml-1 lg:ml-0 xl:h-auto lg:h-0 lg:w-0 iphone:invisible xl:visible lg:invisible" nameBtn="Add a Project"/>
    
    {/* Search Button */}
    <div className="lg:ml-8 xl:ml-8 bg-slate-200 rounded-full my-auto p-2.5 align-middle hover:cursor-pointer hover:opacity-70 iphone:invisible xl:visible lg:visible">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </a>
    </div>

    {/* Profile */}
    <div onClick={()=>setIsTouch(!isTouch)} className=" xl:ml-6 iphone:ml-0 my-auto justify-center flex group iphone:visible xl:visible lg:visible iphone:right-20 iphone:absolute">
      <div className=" bg-slate-200 rounded-full  p-2.5 hover:cursor-pointer hover:opacity-70">
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </div>
      <div className={`w-28  pl-4 mt-16 bg-white absolute mr-16 rounded-lg flex flex-col justify-center divide-solid divide-y pr-4 shadow-xl xl:opacity-0 xl:group-hover:opacity-100  duration-300 ${isTouch ? 'iphone:opacity-100' : 'iphone:opacity-0'} `}>
        <a className="flex-1 py-2 hover:text-[#02a95c]" href="/login">Login</a>
        <a className="flex-1 py-2 hover:text-[#02a95c]" href="/register">Register</a>
      </div>
    </div>
    
  </div>;
};


export default Header;
