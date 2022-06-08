import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/ProjectDetail/PrimaryBtn";
import MainLayout from "../layouts/Mainlayout";
import { BASE_URL } from "../routes/baseURL";
import NotFoundBg from "../img/404.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="my-16 mx-auto text-center flex flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold text-green-500">Oops...</h1>
      <img src={NotFoundBg} alt="not_found" className="w-96" />
      <p className="text-lg font-light">
        Có vẻ như trang bạn đang tìm hiện tại không hoạt động. Bạn hãy quay trở
        lại sau nhé!
      </p>
      <PrimaryBtn callback={() => navigate(BASE_URL.LANDING)} classname="mt-12">
        Quay về trang chủ
      </PrimaryBtn>
    </div>
  );
};

export default NotFound;
