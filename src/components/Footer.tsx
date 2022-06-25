import React from "react";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import "../App.css";

const Footer = () => {
  const logo = require("./logo.png");

  return (
    <div className="w-full  bg-[#282b39]  pt-20 pb-10 px-5 md:px-10">
      <div className="bg-transparent grid grid-cols-2 lg:grid-cols-4 container mx-auto">
        <div className="col-span-2 lg:col-span-1 bg-transparent flex-col">
          <div className="mt-4 bg-slate-100 rounded-full py-3 px-5">
            <p className="w-44 text-4xl font-bold text-[#54b5f1]">Finaid</p>
          </div>

          <div className="text-slate-100  mt-5">
            Join Finaid - raise your fund today!
          </div>
          <div className="text-white text-2xl  mt-7 font-semibold">
            Join Newsletters
          </div>
          <div className="w-full items-center mt-5 px-4 grid justify-items-stretch mb-5 border border-slate-100 hover:border-[#54b5f1] rounded-full">
            <input
              className="py-5 text-slate-100   bg-transparent"
              placeholder="Email Address"
            />
            <a className="p-3 absolute justify-self-end  bg-[#54b5f1] rounded-full hover:cursor-pointer hover:brightness-90 duration-300">
              <FaArrowRight className=" text-white text-lg" />
            </a>
          </div>
        </div>

        <div className="col-span-1 bg-transparent mx-auto">
          <div className="text-white text-2xl mt-4 font-semibold">
            Our Projects
          </div>
          <div className="mt-10 space-y-2.5 flex-col flex text-slate-100">
            <a className="hover:text-[#54b5f1] hover:cursor-pointer">
              Medical & health
            </a>
            <a className="hover:text-[#54b5f1] hover:cursor-pointer">
              Educations
            </a>
            <a className="hover:text-[#54b5f1] hover:cursor-pointer">Film</a>
            <a className="hover:text-[#54b5f1] hover:cursor-pointer">
              Technology
            </a>
            <a className="hover:text-[#54b5f1] hover:cursor-pointer">Design</a>
            <a className="hover:text-[#54b5f1] hover:cursor-pointer">Fashion</a>
          </div>
        </div>

        <div className="col-span-1 bg-transparent mx-auto">
          <div className="text-white text-2xl xl:ml-10 mt-4 font-semibold">
            Company
          </div>
          <div className="mt-10 space-y-2.5 flex-col flex text-slate-100">
            <a className="hover:text-[#54b5f1] hover:cursor-pointer">
              About us
            </a>
            <a className="hover:text-[#54b5f1] hover:cursor-pointer">
              Lastest Event
            </a>
            <a className="hover:text-[#54b5f1] hover:cursor-pointer">
              How it works
            </a>
            <a className="hover:text-[#54b5f1] hover:cursor-pointer">
              News & article
            </a>
            <a className="hover:text-[#54b5f1] hover:cursor-pointer">
              Testimonial
            </a>
            <a className="hover:text-[#54b5f1] hover:cursor-pointer">
              Contact us
            </a>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 bg-transparent mt-6 lg:mt-0">
          <div className="text-white text-2xl  mt-4 font-semibold">Contact</div>
          <div className="mt-7 space-y-2.5 flex-col flex">
            <div className="flex flex-row">
              <div className="bg-[#54b5f1] rounded-full p-3">
                <FaPhoneAlt className="w-6 h-6" />
              </div>
              <div className=" ml-4 space-y-0.5">
                <div className="text-slate-100">Phone Number</div>
                <div className="font-semibold text-white">+012(345) 78 93</div>
              </div>
            </div>
          </div>

          <div className="mt-7 space-y-2.5 flex-col flex">
            <div className="flex flex-row">
              <div className="bg-[#54b5f1] rounded-full p-3">
                <AiOutlineMail className="w-6 h-6" />
              </div>
              <div className=" ml-4 space-y-0.5">
                <div className="text-slate-100">Email Address</div>
                <div className="font-semibold text-white">
                  support@example.com
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 space-y-2.5 flex-col flex">
            <div className="flex flex-row">
              <div className="bg-[#54b5f1] xl:h-auto lg:h-fit rounded-full p-3">
                <GoLocation className="w-6 h-6" />
              </div>
              <div className=" ml-4 space-y-0.5">
                <div className="text-slate-100">Location</div>
                <div className="font-semibold text-white">
                  Thu Duc City, Ho Chi Minh City
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-8 bg-[#1f2230] mt-10 xl:grid lg:grid md:grid xl:justify-items-stretch lg:justify-items-stretch md:justify-items-stretch py-5 xl:items-center lg:items-center md:items-center ">
        <div className="relative text-slate-100 w-fit">
          © 2022 Gavias. All Rights Reserved
        </div>
        <div className="justify-self-end xl:absolute lg:absolute md:absolute flex-row flex space-x-4">
          <FaFacebook className=" w-6 h-6 text-slate-100 hover:text-[#54b5f1] hover:cursor-pointer" />
          <FaInstagram className=" w-6 h-6 text-slate-100 hover:text-[#54b5f1] hover:cursor-pointer" />
          <FaLinkedinIn className=" w-6 h-6 text-slate-100 hover:text-[#54b5f1] hover:cursor-pointer" />
          <FaTwitter className=" w-6 h-6 text-slate-100 hover:text-[#54b5f1] hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
