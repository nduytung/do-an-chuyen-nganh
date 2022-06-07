import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ConfirmModal from "../components/modal/ConfirmModal";

type LayoutType = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: LayoutType) => {
  return (
    <div className="relative">
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
