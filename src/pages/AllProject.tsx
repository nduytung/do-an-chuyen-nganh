import React from "react";
import { LoginForm } from "../components/LoginForm";
import Category from '../components/Category';
import { MdOutlineCastForEducation, MdOutlineDesignServices } from 'react-icons/md';
import { FaFileMedical } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { PrimaryButton } from "../components/PrimaryButton";


export const CATEGORY: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }> = [
    {
      icon: <MdOutlineCastForEducation />,
      title: "Education",
      description: "School, college and univsersity",
    },
    {
      icon: <FaFileMedical />,
      title: "Medical & heath",
      description: "For medical and health purposes",
    },
    {
      icon: <GiClothes />,
      title: "Fashion",
      description: "Fashion and clothing purposes",
    },
    {
      icon: <AiOutlineVideoCamera />,
      title: "Video & Filming",
      description: "Support video & filming methods",
    },
    {
      icon: <BiCodeAlt />,
      title: "Technologies",
      description: "For technology purposes",
    },
    {
      icon: <MdOutlineDesignServices />,
      title: "Design",
      description: "House design & architecture",
    },
  ];

const AllProject: React.FC<{}> = () => {
    const backgroundAbout = require('../components/Image/backgroundAbout.jpg')

    return <div className="pt-18  w-full flex flex-col pb-32">
        <div className="justify-center items-center">
            <div className="w-full h-[500px] backgroundImage flex justify-center items-center flex-col">
                <div className=" text-6xl font-bold text-white">Crowdfunding Platforms</div>
                <div className="text-white text-2xl mt-3 ">We Help at Every Step From Concept to Market</div>
            </div>
        </div>

        <div className=" w-full bg-[#eff5f3] flex-col pl-20 pt-10 pb-16">
            <div className="mb-6 text-4xl font-bold text-[#02a95c]">WHAT WE DO</div>
            <div className=" w-full grid">
            <div className=" text-black font-semibold text-3xl mt-3 ">Popular Categories</div>
            <PrimaryButton nameBtn="Projects Explore" type="DEFAULT" classname="w-fit  justify-self-end mr-20 "/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {CATEGORY.map((item) => {
              return (
                <Category
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  classname="col-span-1"
                />
              );
            })}
          </div>
      </div>

        
    </div>
</div>
};

export default AllProject;