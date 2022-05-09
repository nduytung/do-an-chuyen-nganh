import "../App.css"
import React from "react";
import { PrimaryButton } from "../components/PrimaryButton";
import {AiFillCheckCircle} from 'react-icons/ai'
import TagMember from "../components/TagMember";

const About = () => {

  const backgroundAbout = require('../components/Image/backgroundAbout.jpg')
  const image=require('../components/Image/image-1.jpg')

  return <div className="pt-18  w-full flex flex-col pb-32 ">
    <div className="justify-center items-center">
      <div 
        className="w-full h-[500px] backgroundImage flex justify-center items-center flex-col"
      >
        <div className=" text-6xl font-bold text-white">Crowdfunding Platforms</div>
        <div className="text-white text-2xl mt-3 ">We Help at Every Step From Concept to Market</div>
      </div>
    </div>

    <div className="flex flex-row w-full pt-20">
      <div className="flex-1 flex-col ml-20">
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
      <div className="flex-1  justify-center items-center flex">
        <img src={image} className="w-7/12 rounded-3xl" />
      </div>
    </div>

    <div className="mt-16 w-full bg-[#eff5f3] flex-col pl-20 pt-5">
      <div className="mb-6 text-4xl font-bold text-[#02a95c]">EXCLUSIVE TEAM</div>
      <div className=" w-full grid">
        <div className=" text-black font-semibold text-3xl mt-3 inline-block">Meet Professional Team</div>
        <PrimaryButton nameBtn="Join Our Team" type="DEFAULT" classname="w-fit inline-block justify-self-end mr-20 "/>
      </div>
      <div className="flex flex-row justify-center items-center">
        <TagMember membername="Christine Eve" src="https://gaviaswp.com/wp/funden/wp-content/plugins/funden-themer/elementor/assets/images/team-3.jpg"/>
        <TagMember membername="Christine Eve" src="https://gaviaswp.com/wp/funden/wp-content/plugins/funden-themer/elementor/assets/images/team-3.jpg"/>
        <TagMember membername="Christine Eve" src="https://gaviaswp.com/wp/funden/wp-content/plugins/funden-themer/elementor/assets/images/team-3.jpg"/>
        <TagMember membername="Christine Eve" src="https://gaviaswp.com/wp/funden/wp-content/plugins/funden-themer/elementor/assets/images/team-3.jpg"/>
      </div>
      
    </div>

  </div>;
};

export default About;