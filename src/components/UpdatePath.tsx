import React from "react";

const UpdatePath = ({
  date,
  title,
  desc,
}: {
  date: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex items-start gap-5 w-full">
      <span className="h-6 w-6 rounded-full bg-[#00a85c]"></span>
      <div className="w-full">
        <p className="text-[#00a85c] font-bold">{date}</p>
        <p className="font-bold text-2xl">{title}</p>
        <hr className="my-2 w-full" />
        <p className="font-thin text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default UpdatePath;
