import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

type PrimaryBtn = {
  callback: () => void;
  children: string;
  classname?: string | null;
};

const WhiteBtn = ({ classname, callback, children }: PrimaryBtn) => {
  return (
    <button
      className={`${classname} gap-1 flex border-[#54b5f1] border items-center justify-between text-[#54b5f1] rounded-full hover:bg-[#54b5f1] hover:text-white px-6 py-3 font-bold`}
      onClick={callback}
    >
      {children}
      <AiOutlineArrowRight />
    </button>
  );
};

export default WhiteBtn;
