import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
type PrimaryBtn = {
  callback: () => void;
  children: string;
  classname?: string | null;
};
const PrimaryBtn = ({ callback, children, classname = null }: PrimaryBtn) => {
  return (
    <button
      className={`${classname} flex items-center justify-between bg-[#00a85c] rounded-full text-white px-6 py-3 font-bold`}
      onClick={callback}
    >
      {children}
      <AiOutlineArrowRight className="text-white" />
    </button>
  );
};

export default PrimaryBtn;
