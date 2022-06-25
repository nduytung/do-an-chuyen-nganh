import React from "react";

type CategoryType = {
  icon: React.ReactNode;
  title: string;
  classname?: string;
  description: string;
  value?: string;
  setFilter?: any;
};
const Category = ({
  icon,
  title,
  description,
  classname,
  setFilter,
  value,
}: CategoryType) => {
  return (
    <button
      onClick={() => setFilter(value)}
      className={`${classname} cursor-pointer hover:border-l-0 hover:border-t-0 hover:border-4 hover:border-[#54b5f1] border border-gray-100 shadow-lg sm:w-10/12 flex items-center justify-start gap-6 px-6 py-8 bg-white`}
    >
      <div className="text-6xl text-[#54b5f1]">{icon}</div>
      <div>
        <h3 className="text-xl font-extrabold">{title}</h3>
        <p className="text-gray-500 text-base">{description}</p>
      </div>
    </button>
  );
};

export default Category;
