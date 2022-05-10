import React from "react";
import {FaArrowRight, FaPhoneAlt, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import '../App.css'

const Footer = () => {

  const logo = require('./logo.png');

  return <div className="w-full flex bg-[#282b39] justify-center items-center pt-20 pb-10 px-10 flex-col">

    <div className="bg-transparent flex-row flex w-full">
      <div className="flex-[4_1_0%] bg-transparent flex-col">
        <div className="ml-4 mt-4 bg-slate-100 py-2 px-3 w-fit rounded-full">
          <img src={logo} className="w-44" />
        </div>

        <div className="text-slate-100 ml-4 mt-5">Sed ut perspiciatis unde omn iste natus error sit voluptatem.</div>
        <div className="text-white text-2xl ml-4 mt-7 font-semibold">Join Newsletters</div>
        <div className="w-full items-center mt-5 grid justify-items-stretch mb-5">
          <input className="w-9/12 py-5 ml-4 pl-4  rounded-full text-slate-100 border-slate-100 border hover:border-[#02a95c] bg-transparent" placeholder="Email Address" />
          <a className=" absolute justify-self-end mr-10 bg-[#02a95c] rounded-full p-3 hover:cursor-pointer hover:brightness-90 duration-300">
            <FaArrowRight className="w-6 h-6 text-white"/>
          </a>
        </div>
      </div>

      <div className="flex-[3_1_0%] bg-transparent">
        <div className="text-white text-2xl ml-10 mt-4 font-semibold">Our Projects</div>
        <div className="mt-10 ml-10 space-y-2.5 flex-col flex text-slate-100">
          <a className="hover:text-[#02a95c] hover:cursor-pointer">Medical & health</a>
          <a className="hover:text-[#02a95c] hover:cursor-pointer">Educations</a>
          <a className="hover:text-[#02a95c] hover:cursor-pointer">Film</a>
          <a className="hover:text-[#02a95c] hover:cursor-pointer">Technology</a>
          <a className="hover:text-[#02a95c] hover:cursor-pointer">Design</a>
          <a className="hover:text-[#02a95c] hover:cursor-pointer">Fashion</a>
        </div>
      </div>

      <div className="flex-[3_1_0%] bg-transparent">
        <div className="text-white text-2xl ml-10 mt-4 font-semibold">Company</div>
        <div className="mt-10 ml-10 space-y-2.5 flex-col flex text-slate-100">
          <a className="hover:text-[#02a95c] hover:cursor-pointer">About us</a>
          <a className="hover:text-[#02a95c] hover:cursor-pointer">Lastest Event</a>
          <a className="hover:text-[#02a95c] hover:cursor-pointer">How it works</a>
          <a className="hover:text-[#02a95c] hover:cursor-pointer">News & article</a>
          <a className="hover:text-[#02a95c] hover:cursor-pointer">Testimonial</a>
          <a className="hover:text-[#02a95c] hover:cursor-pointer">Contact us</a>
        </div>
      </div>

      <div className="flex-[4_1_0%] bg-transparent">
        <div className="text-white text-2xl ml-5 mt-4 font-semibold">Contact</div>
        <div className="mt-7 ml-5 space-y-2.5 flex-col flex">
          <div className="flex flex-row">
            <div className="bg-[#02a95c] rounded-full p-3">
              <FaPhoneAlt className="w-6 h-6" />
            </div>
            <div className=" ml-4 space-y-0.5">
              <div className="text-slate-100">Phone Number</div>
              <div className="font-semibold text-white">+012(345) 78 93</div>
            </div>
          </div>
        </div>

        <div className="mt-7 ml-5 space-y-2.5 flex-col flex">
          <div className="flex flex-row">
            <div className="bg-[#02a95c] rounded-full p-3">
              <AiOutlineMail className="w-6 h-6" />
            </div>
            <div className=" ml-4 space-y-0.5">
              <div className="text-slate-100">Email Address</div>
              <div className="font-semibold text-white">support@example.com</div>
            </div>
          </div>
        </div>

        <div className="mt-7 ml-5 space-y-2.5 flex-col flex">
          <div className="flex flex-row">
            <div className="bg-[#02a95c] rounded-full p-3">
              <GoLocation className="w-6 h-6" />
            </div>
            <div className=" ml-4 space-y-0.5">
              <div className="text-slate-100">Location</div>
              <div className="font-semibold text-white">Thu Duc City, Ho Chi Minh City</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-10/12 p-8 bg-[#1f2230] mt-10 grid justify-items-stretch py-5 items-center">
      <div className="relative text-slate-100 w-fit">© 2022 Gavias. All Rights Reserved</div>
      <div className="justify-self-end absolute flex-row flex space-x-4">
        <FaFacebook className=" w-6 h-6 text-slate-100 hover:text-[#02a95c] hover:cursor-pointer"/>
        <FaInstagram className=" w-6 h-6 text-slate-100 hover:text-[#02a95c] hover:cursor-pointer"/>
        <FaLinkedinIn className=" w-6 h-6 text-slate-100 hover:text-[#02a95c] hover:cursor-pointer"/>
        <FaTwitter className=" w-6 h-6 text-slate-100 hover:text-[#02a95c] hover:cursor-pointer"/>
      </div>
    </div>

  </div>;
};

export default Footer;
