import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
type PrimaryBtn = {
  callback: () => void;
  children: string;
  classname?: string | null;
  disabled?: boolean;
};
const PrimaryBtn = ({
  callback,
  children,
  classname = null,
  disabled = false,
}: PrimaryBtn) => {
  return (
    <button
      className={`${classname} gap-1 flex items-center justify-between ${
        !disabled ? " bg-[#00a85c] text-white" : "bg-gray-100 text-black"
      } rounded-full  px-6 py-3 font-bold`}
      onClick={callback}
      disabled={disabled}
    >
      {children} <AiOutlineArrowRight className="text-white" />
    </button>
  );
};

export default PrimaryBtn;
