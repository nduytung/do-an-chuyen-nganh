import React from "react";
import defaultBg from "../img/defaultbg.png";

type ProjectCardType = {
  cate: string;
  title: string;
  dayLeft: number;
  background?: string;
  description: string;
};

const AdvisingProjectCard = ({
  cate,
  title,
  dayLeft,
  background,
  description,
}: ProjectCardType) => {
  return (
    <main className="bg-white border border-gray-100 shadow-md flex flex-col md:flex-row">
      <img
        className="bg-gray-200  md:w-56 xl:w-64 lg:h-full"
        alt="default-bg"
        src={background ? background : defaultBg}
      />

      <div className="p-6 flex flex-col items-start h-full">
        <div className="p-6 px-3 py-2 text-white font-semibold text-lg bg-[#00a85c] ">
          {cate}
        </div>
        <h2 className="font-bold lg:text-xl xl:text-2xl mt-6 mb-3">{title}</h2>
        <div className="w-full my-3">
          <p>{description}</p>
        </div>

        <div className="bg-gray-100 p-3 flex lg:flex-col xl:flex-row justify-between items-center w-full hover:border-[#00a85c]  hover:border cursor-pointer">
          {dayLeft} days left!{" "}
          <span className="text-[#00a85c]"> Register now</span>
        </div>
      </div>
    </main>
  );
};

export default AdvisingProjectCard;
