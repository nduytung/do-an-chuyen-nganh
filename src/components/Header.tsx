import React from "react";

const Header = () => {
  return <div className="header w-full h-14 bg-white absolute">
    {/* <img src="./logo.png" className="inline-block"/> */}
    {}
    <ul className=" w-full  inline-block">
      <li className="leading-[56px] inline-block no-underline px-5 relative group hover:cursor-pointer justify-center align-middle ">
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
      <li className="leading-[56px] inline-block no-underline px-5 relative group hover:cursor-pointer justify-center align-middle">
        <a className="tracking-widest text-lg" href="">Explore</a>
      </li>
      <li className="leading-[56px] inline-block no-underline px-5 relative group hover:cursor-pointer justify-center align-middle ">
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
      <li className="leading-[56px] inline-block no-underline px-5 relative group hover:cursor-pointer justify-center align-middle ">
        <a className="tracking-widest text-lg" href="">Pages
        </a>
        <div className="-mt-3 w-8/12  h-0.5 bg-black/30 absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 "/>
        <ul className="absolute  w-36 h-[164px] bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ">
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">About</a></li>
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Gallery</a></li>
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Career</a></li>
          <li ><a className=" hover:text-green-700 hover:font-semibold block pl-3 leading-10 border-b text-sm tracking-widest " href="">Company Overview</a></li>
        </ul>
      </li>
      <li className="leading-[56px] inline-block no-underline px-5 relative group hover:cursor-pointer justify-center align-middle">
        <a className="tracking-widest text-lg" href="">Contact</a>
        <div className="-mt-3 w-8/12  h-0.5 bg-black/30 absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 "/>
      </li>
    </ul>
  </div>;
};


export default Header;
