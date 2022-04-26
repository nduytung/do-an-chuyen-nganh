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
      className={`${classname} gap-1 flex border-[#00a85c] border items-center justify-between text-[#00a85c] rounded-full hover:bg-[#00a85c] hover:text-white px-6 py-3 font-bold`}
      onClick={callback}
    >
      {children}
      <AiOutlineArrowRight />
    </button>
  );
};

export default WhiteBtn;
