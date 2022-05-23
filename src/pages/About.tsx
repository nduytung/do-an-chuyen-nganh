import "../App.css"
import React from "react";
import { PrimaryButton } from "../components/PrimaryButton";
import {AiFillCheckCircle, AiOutlineFundProjectionScreen, AiFillStar} from 'react-icons/ai'
import TagMember from "../components/TagMember";
import {RiTeamLine} from "react-icons/ri";
import {FaAward} from 'react-icons/fa';
import {GiProgression} from 'react-icons/gi'

const About = () => {

  const backgroundAbout = require('../components/Image/backgroundAbout.jpg')
  const image=require('../components/Image/image-1.jpg')

  return <div className="pt-18  w-full flex flex-col pb-32 ">

    <div className="justify-center items-center">
      <div className="w-full h-[500px] backgroundImage flex justify-center items-center flex-col iphone:px-5">
        <div className=" laptop:text-6xl iphone:text-5xl font-bold text-white">Crowdfunding Platforms</div>
          <div className="text-white laptop:text-2xl iphone:text-xl mt-3 ">We Help at Every Step From Concept to Market</div>
      </div>
    </div>

    <div className="flex laptop:flex-row w-full pt-20 iphone:flex-col">
      <div className="flex-1 flex-col laptop:ml-20 iphone:ml-7 iphone:pr-4">
        <div className="mb-6 text-4xl font-bold text-[#02a95c]">ABOUT US</div>
        <div className="mb-6 text-3xl">We Help How To Improve Product Marketing</div>
        <div className="mb-6 text-lg">Sedut perspiciatis unde omnis iste natus voluptatem accusan tium dolore dantiumy totam rem apeam, eaque ipsa quaventore veritatis quasi architecto beatae</div>
        <div className="flex flex-col">
          <div className="flex flex-row mt-3">
            <AiFillCheckCircle className="text-[#02a95c] h-10  w-fit mt-1"/>
            <div className="ml-5">
              <div className="text-lg font-semibold">Highest Success Rates</div>
              <div className="mt-1">Quis autem vel eum iure reprehenderit quin.</div>
            </div>
          </div>

          <div className="flex flex-row mt-3">
            <AiFillCheckCircle className="text-[#02a95c] h-10  w-fit mt-1"/>
            <div className="ml-5">
              <div className="text-lg font-semibold">Highest Success Rates</div>
              <div className="mt-1">Quis autem vel eum iure reprehenderit quin.</div>
            </div>
          </div>

          <div className="flex flex-row mt-3">
            <AiFillCheckCircle className="text-[#02a95c] h-10  w-fit mt-1"/>
            <div className="ml-5">
              <div className="text-lg font-semibold">Highest Success Rates</div>
              <div className="mt-1">Quis autem vel eum iure reprehenderit quin.</div>
            </div>
          </div>
        </div>
        <PrimaryButton nameBtn="Read More" type="DEFAULT" classname="w-fit mt-10 "/>
      </div>
      <div className="flex-1  justify-center items-center flex iphone:mt-10">
        <img src={image} className="w-7/12 rounded-3xl" />
      </div>
    </div>

    <div className="mt-16 w-full bg-[#eff5f3] flex-col laptop:pl-20 pt-10 pb-16 iphone:pl-10">
      <div className="mb-6 text-4xl font-bold text-[#02a95c]">EXCLUSIVE TEAM</div>
      <div className=" w-full grid">
        <div className=" text-black font-semibold text-3xl mt-3 inline-block">Meet Professional Team</div>
        <PrimaryButton nameBtn="Join Our Team" type="DEFAULT" classname="w-fit inline-block justify-self-end laptop:mr-20 iphone:mt-5 iphone:mr-10 "/>
      </div>
      <div className="flex laptop:flex-row iphone:flex-col justify-center items-center">
        <TagMember membername="Christine Eve" src="https://gaviaswp.com/wp/funden/wp-content/plugins/funden-themer/elementor/assets/images/team-3.jpg"/>
        <TagMember membername="David Hardson" src="https://gaviaswp.com/wp/funden/wp-content/plugins/funden-themer/elementor/assets/images/team-4.jpg"/>
        <TagMember membername="Jessica Brown" src="https://gaviaswp.com/wp/funden/wp-content/plugins/funden-themer/elementor/assets/images/team-1.jpg"/>
        <TagMember membername="Yoni Albert" src="https://gaviaswp.com/wp/funden/wp-content/plugins/funden-themer/elementor/assets/images/team-2.jpg"/>
      </div>
    </div>

    <div className="bg-[#1f2230] w-full laptop:flex-row iphone:flex-col px-12 flex">
      <div className="flex-1 h-full flex-col flex justify-center pl-5 group py-12 pr-5">
        <AiOutlineFundProjectionScreen className="h-20 text-[#02a95c] w-20 p-1 group-hover:scale-75 ease-in-out duration-300"/>
        <div className="text-5xl  text-white mt-3 font-bold ">3,598+</div>
        <div className="text-xl  text-white mt-3 font-semibold">We’ve Project Complete</div>
        <div className="text-base text-white mt-3  pl-5 border-l-4 border-[#02a95c]">Quis autem veleucmure reprehenderit quein.</div>
      </div>
      <div className="flex-1 h-full flex-col flex justify-center pl-5 group py-12 pr-5">
        <RiTeamLine className="h-20 text-[#02a95c] w-20 p-1 group-hover:scale-75 ease-in-out duration-300"/>
        <div className="text-5xl  text-white mt-3 font-bold ">1,634+</div>
        <div className="text-xl  text-white mt-3 font-semibold">Trusted Global Partners</div>
        <div className="text-base text-white mt-3  pl-5 border-l-4 border-[#02a95c]">Quis autem veleucmure reprehenderit quein.</div>
      </div>
      <div className="flex-1 h-full flex-col flex justify-center pl-5 group py-12 pr-5">
        <FaAward className="h-20 text-[#02a95c] w-20 p-1 group-hover:scale-75 ease-in-out duration-300"/>
        <div className="text-5xl  text-white mt-3 font-bold ">8,566+</div>
        <div className="text-xl  text-white mt-3 font-semibold">Global Awards Winning</div>
        <div className="text-base text-white mt-3  pl-5 border-l-4 border-[#02a95c]">Quis autem veleucmure reprehenderit quein.</div>
      </div>
      <div className="flex-1 h-full flex-col flex justify-center pl-5 group py-12 pr-5">
        <GiProgression className="h-20 text-[#02a95c] w-20 p-1 group-hover:scale-75 ease-in-out duration-300"/>
        <div className="text-5xl  text-white mt-3 font-bold ">4,856+</div>
        <div className="text-xl  text-white mt-3 font-semibold">24/7 Active Volunteer</div>
        <div className="text-base text-white mt-3  pl-5 border-l-4 border-[#02a95c]">Quis autem veleucmure reprehenderit quein.</div>
      </div>
    </div>

    <div className="w-full flex justify-center items-center flex-col">
      <div className="mb-6 text-4xl font-bold text-[#02a95c] mt-10">CLIENTS FEEDBACK</div>
      <div className="mb-6 text-3xl font-semibold">What Peopel’s Say</div>
      <div className="w-full bg-white py-10 flex justify-center flex-wrap ">
        <div className="w-[350px] h-[250px] my-5 mx-5 bg-slate-200 flex-col rounded-xl shadow-2xl">
          <div className="flex-row w-full py-5 flex pl-5">
            <img className="h-14 w-14 rounded-full" src="https://gaviaswp.com/wp/funden/wp-content/uploads/2021/09/testimonial-1.jpg"/>
            <div className="ml-6">
              <div className="text-xl font-semibold">Shirley Smith</div>
              <div className="font-bold text-[#02a95c]">Customer</div>
            </div>
          </div>
          <div className="pl-5 pb-3">Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem.</div>
          <div className="w-10/12 h-[2px] bg-black mx-auto"/>
          <div className="pl-5 h-[70px] flex flex-row items-center ">
            <div className="font-bold text-lg">Rating</div>
            <div className="ml-6 flex-row flex">
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400"/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
            </div>
          </div>

        </div>
        <div className="w-[350px] h-[250px] my-5 mx-5 bg-slate-200 flex-col rounded-xl shadow-2xl">
          <div className="flex-row w-full py-5 flex pl-5">
            <img className="h-14 w-14 rounded-full" src="https://gaviaswp.com/wp/funden/wp-content/uploads/2021/09/testimonial-1.jpg"/>
            <div className="ml-6">
              <div className="text-xl font-semibold">Shirley Smith</div>
              <div className="font-bold text-[#02a95c]">Customer</div>
            </div>
          </div>
          <div className="pl-5 pb-3">Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem.</div>
          <div className="w-10/12 h-[2px] bg-black mx-auto"/>
          <div className="pl-5 h-[70px] flex flex-row items-center ">
            <div className="font-bold text-lg">Rating</div>
            <div className="ml-6 flex-row flex">
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400"/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
            </div>
          </div>

        </div>

        <div className="w-[350px] h-[250px] my-5 mx-5 bg-slate-200 flex-col rounded-xl shadow-2xl">
          <div className="flex-row w-full py-5 flex pl-5">
            <img className="h-14 w-14 rounded-full" src="https://gaviaswp.com/wp/funden/wp-content/uploads/2021/09/testimonial-1.jpg"/>
            <div className="ml-6">
              <div className="text-xl font-semibold">Shirley Smith</div>
              <div className="font-bold text-[#02a95c]">Customer</div>
            </div>
          </div>
          <div className="pl-5 pb-3">Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem.</div>
          <div className="w-10/12 h-[2px] bg-black mx-auto"/>
          <div className="pl-5 h-[70px] flex flex-row items-center ">
            <div className="font-bold text-lg">Rating</div>
            <div className="ml-6 flex-row flex">
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400"/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
            </div>
          </div>

        </div>

        <div className="w-[350px] h-[250px] my-5 mx-5 bg-slate-200 flex-col rounded-xl shadow-2xl">
          <div className="flex-row w-full py-5 flex pl-5">
            <img className="h-14 w-14 rounded-full" src="https://gaviaswp.com/wp/funden/wp-content/uploads/2021/09/testimonial-1.jpg"/>
            <div className="ml-6">
              <div className="text-xl font-semibold">Shirley Smith</div>
              <div className="font-bold text-[#02a95c]">Customer</div>
            </div>
          </div>
          <div className="pl-5 pb-3">Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem.</div>
          <div className="w-10/12 h-[2px] bg-black mx-auto"/>
          <div className="pl-5 h-[70px] flex flex-row items-center ">
            <div className="font-bold text-lg">Rating</div>
            <div className="ml-6 flex-row flex">
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400"/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
            </div>
          </div>

        </div>

        <div className="w-[350px] h-[250px] my-5 mx-5 bg-slate-200 flex-col rounded-xl shadow-2xl">
          <div className="flex-row w-full py-5 flex pl-5">
            <img className="h-14 w-14 rounded-full" src="https://gaviaswp.com/wp/funden/wp-content/uploads/2021/09/testimonial-1.jpg"/>
            <div className="ml-6">
              <div className="text-xl font-semibold">Shirley Smith</div>
              <div className="font-bold text-[#02a95c]">Customer</div>
            </div>
          </div>
          <div className="pl-5 pb-3">Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem.</div>
          <div className="w-10/12 h-[2px] bg-black mx-auto"/>
          <div className="pl-5 h-[70px] flex flex-row items-center ">
            <div className="font-bold text-lg">Rating</div>
            <div className="ml-6 flex-row flex">
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400"/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
            </div>
          </div>

        </div>

        <div className="w-[350px] h-[250px] my-5 mx-5 bg-slate-200 flex-col rounded-xl shadow-2xl">
          <div className="flex-row w-full py-5 flex pl-5">
            <img className="h-14 w-14 rounded-full" src="https://gaviaswp.com/wp/funden/wp-content/uploads/2021/09/testimonial-1.jpg"/>
            <div className="ml-6">
              <div className="text-xl font-semibold">Shirley Smith</div>
              <div className="font-bold text-[#02a95c]">Customer</div>
            </div>
          </div>
          <div className="pl-5 pb-3">Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem.</div>
          <div className="w-10/12 h-[2px] bg-black mx-auto"/>
          <div className="pl-5 h-[70px] flex flex-row items-center ">
            <div className="font-bold text-lg">Rating</div>
            <div className="ml-6 flex-row flex">
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400"/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
              <AiFillStar className="h-8 w-8 mr-3 border-none text-yellow-400 "/>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>;
};

export default About;