import React from "react";
import { JsxElement } from "typescript";

type ContainerType = {
  children: React.ReactNode;
  classname?: string | null;
};

const PageContainer = ({ children, classname = null }: ContainerType) => {
  return (
    <div
      className={`w-full container mx-auto px-4 md:px-5 lg:px-8 max-w-screen-xl ${classname}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
