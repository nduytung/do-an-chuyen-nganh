import React from "react";

type ProjectCardType = {
  cate: string;
  title: string;
  raised: number;
  goal: number;
  dayLeft: number;
};

const ProjectCard = ({
  cate,
  title,
  raised,
  goal,
  dayLeft,
}: ProjectCardType) => {
  const percent = (raised / goal) * 100;
  return (
    <main className="bg-white border border-gray-100">
      <div className="bg-gray-200 w-full h-56"></div>
      <div className="p-6 flex flex-col items-start">
        <div className="p-6 px-3 py-2 text-white font-semibold text-lg bg-[#00a85c] -mt-12">
          {cate}
        </div>
        <h2 className="font-bold text-2xl my-6">{title}</h2>
        <div className="flex items-center justify-between w-full">
          <p>Raised: ${raised}</p>
          <p>{percent}%</p>
        </div>
        <p className="text-lg font-bold my-4">
          Goal: <span className="text-[#00a85c]">${goal}</span>
        </p>
        <div className="bg-gray-100 p-3 flex justify-between items-center w-full">
          {dayLeft} days left! Register now
        </div>
      </div>
    </main>
  );
};

export default ProjectCard;
