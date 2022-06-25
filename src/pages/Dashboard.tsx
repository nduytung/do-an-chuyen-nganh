import React from "react";
import { LoginForm } from "../components/LoginForm";
import Category from "../components/Category";
import {
  MdOutlineCastForEducation,
  MdOutlineDesignServices,
} from "react-icons/md";
import { FaFileMedical } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
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

const Dashboard: React.FC<{}> = () => {
  const backgroundAbout = require("../components/Image/backgroundAbout.jpg");

  return (
    <div className="pt-18  w-full flex flex-col ">
      <div className="justify-center items-center">
        <div className="w-full h-[500px] backgroundImage flex justify-center items-center flex-col sm:px-5">
          <div className=" xl:text-6xl lg:text-6xl sm:text-5xl font-bold text-white">
            Crowdfunding Platforms
          </div>
          <div className="text-white xl:text-2xl lg:text-2xl sm:text-xl mt-3 ">
            We Help at Every Step From Concept to Market
          </div>
        </div>
      </div>

      <div className=" w-full bg-[#eff5f3] xl:flex-col lg:flex-col pl-10 pt-10 pb-16 xl:flex lg:flex sm:flex-col sm:flex ">
        <div className="mb-6 text-4xl font-bold text-[#54b5f1]">WHAT WE DO</div>
        <div className=" text-black font-semibold text-3xl mt-3 ">
          Popular Categories
        </div>
        <PrimaryButton
          nameBtn="Projects Explore"
          type="DEFAULT"
          classname="w-fit  justify-self-end xl:mr-20 lg:mr-20 sm:mt-10 xl:mt-10 lg:mt-10"
        />
        <div className="grid sm:grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6 mt-10">
          {CATEGORY.map((item) => {
            return (
              <Category
                title={item.title}
                description={item.description}
                icon={item.icon}
                classname="col-span-1 w-10/12"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
