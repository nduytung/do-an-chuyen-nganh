import React from "react";
import Login from "../pages/Login";

const WithAuth = (Comp: React.FC) => {
  if (!localStorage.getItem("token")) return <Login />;
  return <Comp />;
};

export default WithAuth;
