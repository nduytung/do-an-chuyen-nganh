import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

type LayoutType = {
  children: React.ReactNode;
};

const Mainlayout = ({ children }: LayoutType) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Mainlayout;
