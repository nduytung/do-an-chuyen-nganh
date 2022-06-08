import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/ProjectDetail/PrimaryBtn";
import MainLayout from "../layouts/Mainlayout";
import { BASE_URL } from "../routes/baseURL";
import SuccessBg from "../img/success-check.png";

const DonePayment = () => {
  const navigate = useNavigate();

  return (
    <div className="my-16 mx-auto text-center flex flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold text-green-500">Xin cảm ơn</h1>
      <img src={SuccessBg} alt="not_found" className="w-32 my-10" />
      <p className="text-lg font-light">
        Thanh toán thành công, xin cảm ơn những đóng góp của bạn dành cho cộng
        đồng
      </p>
      <PrimaryBtn callback={() => navigate(BASE_URL.LANDING)} classname="mt-12">
        Quay về trang chủ
      </PrimaryBtn>
    </div>
  );
};

export default DonePayment;
