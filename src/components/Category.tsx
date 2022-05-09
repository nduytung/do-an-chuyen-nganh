import React from "react";

type CategoryType = {
  icon: React.ReactNode;
  title: string;
  classname?: string;
  description: string;
};
const Category = ({ icon, title, description, classname }: CategoryType) => {
  return (
    <main
      className={`${classname} hover:border-l-0 hover:border-t-0 hover:border-4 hover:border-[#00a85c] border border-gray-100 shadow-lg flex items-center justify-start gap-6 px-6 py-8`}
    >
      <div className="text-6xl text-[#00a85c]">{icon}</div>
      <div>
        <h3 className="text-xl font-extrabold">{title}</h3>
        <p className="text-gray-500 text-base">{description}</p>
      </div>
    </main>
  );
};

export default Category;