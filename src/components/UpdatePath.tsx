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
    <div className="flex items-start gap-5 w-full my-8">
      <span className="h-6 w-6 rounded-full bg-[#54b5f1]"></span>
      <div className="w-full">
        <p className="text-[#54b5f1] font-bold">{date}</p>
        <p className="font-bold text-2xl">{title}</p>
        <hr className="my-2 w-full" />
        <p
          dangerouslySetInnerHTML={{ __html: desc }}
          className="font-thin text-lg"
        />
      </div>
    </div>
  );
};

export default UpdatePath;
