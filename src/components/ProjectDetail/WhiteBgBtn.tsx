import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

type PrimaryBtn = {
  callback: () => void;
  children: string;
  classname?: string | null;
};

const WhiteBgBtn = ({ classname, callback, children }: PrimaryBtn) => {
  return (
    <button
      className={`${classname} gap-1 flex bg-white border items-center justify-between text-[#54b5f1] rounded-full h px-6 py-3 font-bold`}
      onClick={callback}
    >
      {children}
      <AiOutlineArrowRight />
    </button>
  );
};

export default WhiteBgBtn;
