import React from "react";

const DonateCost = ({ children }: { children: string }) => {
  return (
    <div className="w-20 text-center text-gray-600 border-2 cursor-pointer rounded-full border-gray-300 focus-within:border-green-600 font-bold focus-within:text-[#00a85c] text-lg py-2">
      ${children}
    </div>
  );
};

export default DonateCost;
