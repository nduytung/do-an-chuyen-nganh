import React from "react";

const WhiteBox = ({ value, name }: { value: number; name: string }) => {
  return (
    <div className="bg-white text-center p-4 flex-1 border border-gray-200 shadow-sm rounded-md cursor-pointer hover:bg-[#00a85c] hover:text-white">
      <p className="text-2xl font-bold">{Math.floor(value)}</p>
      <p className="text-lg font-light">{name}</p>
    </div>
  );
};

export default WhiteBox;
