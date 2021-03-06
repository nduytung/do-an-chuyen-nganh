import React from "react";

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#54b5f1] text-white font-bold px-6 py-3 text-lg w-auto">
      {children}
    </div>
  );
};

export default Tag;
