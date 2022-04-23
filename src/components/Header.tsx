import React from "react";
import { LayoutButton } from "./LayoutButton";


const Header = () => {

  const logo = require('./logo.png');

  return <div className="header w-full h-16 bg-white absolute shadow-2xl ">
    <a href="#" className="hover:cursor-pointer hover:opacity-90">
      <img src={logo} className="w-44 inline-block leading-[44px] ml-4 pl-10 " />
    </a>
    
    <ul className=" ml-10 w-7/12 inline-block">
      <li className="leading-[64px] inline-block no-underline px-5 relative group hover:cursor-pointer justify-center align-middle ">
        <a className="tracking-widest text-lg" href="">Home
        </a>
        <div className="-mt-3 w-8/12 h-0.5 bg-black/30 absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 "/>
        <ul className="absolute  w-36 h-[164px] bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ">
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Home 1</a></li>
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Home 2</a></li>
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Home 3</a></li>
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Home 4</a></li>
        </ul>
      </li>
      <li className="leading-[64px] inline-block no-underline px-5 relative group hover:cursor-pointer justify-center align-middle">
        <a className="tracking-widest text-lg" href="">Explore</a>
      </li>
      <li className="leading-[64px] inline-block no-underline px-5 relative group hover:cursor-pointer justify-center align-middle ">
        <a className="tracking-widest text-lg" href="">Dashboard
        </a>
        <div className="-mt-3 w-8/12  h-0.5 bg-black/30 absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 "/>
        <ul className="absolute  w-36 h-[164px] bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ">
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Dashboard</a></li>
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Bookmark</a></li>
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Profile</a></li>
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Add a project</a></li>
        </ul>
      </li>
      <li className="leading-[64px] inline-block no-underline px-5 relative group hover:cursor-pointer justify-center align-middle ">
        <a className="tracking-widest text-lg" href="">Pages
        </a>
        <div className="-mt-3 w-8/12  h-0.5 bg-black/30 absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 "/>
        <ul className="absolute  w-44 h-[164px] bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ">
          <li><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">About</a></li>
          <li><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Gallery</a></li>
          <li><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Career</a></li>
          <li><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Company Overview</a></li>
        </ul>
      </li>
      <li className="leading-[64px] inline-block no-underline px-5 relative group hover:cursor-pointer justify-center align-middle">
        <a className="tracking-widest text-lg" href="">Contact</a>
        <div className="-mt-3 w-8/12  h-0.5 bg-black/30 absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 "/>
      </li>
    </ul>
    {/* <div className="inline-block ml-5 bg-red-400">Btn add a project</div> */}
    <LayoutButton classname="inline-block ml-1" nameBtn="Add a Project"/>
    <div className="inline-block ml-6 bg-slate-200 rounded-full leading-[44px] p-2.5 align-middle hover:cursor-pointer hover:opacity-70">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </a>
    </div>
    <div className="inline-block ml-4 bg-slate-200 rounded-full leading-[44px] p-2.5 align-middle hover:cursor-pointer hover:opacity-70">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </a>
    </div>
  </div>;
};


export default Header;
