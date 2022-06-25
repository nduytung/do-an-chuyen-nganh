import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const CheckList = ({ itemList }: { itemList: string[] }) => {
  return (
    <div className="my-4">
      {itemList.map((item: string) => {
        return (
          <p className="flex items-center gap-3 h-8">
            <div className="bg-[#54b5f1] text-white font-semibold rounded-full text-center px-1 py-1">
              <AiOutlineCheck />
            </div>
            <p className="text-base text-gray-500 font-light">{item}</p>
          </p>
        );
      })}
    </div>
  );
};

export default CheckList;
