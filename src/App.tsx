import React, { Suspense, useContext, useEffect, useState } from "react";
import { Provider, RootStateOrAny, useSelector } from "react-redux";
import MainLayout from "./layouts/Mainlayout";
import { Routes, Route } from "react-router-dom";
import { routeList } from "./routes/routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import WithAuth from "./helper/withAuth";
import Detail from "./pages/project/Detail";
import NotFound from "./pages/NotFound";

const App = () => {
  const counter: number = useSelector(
    (state: RootStateOrAny) => state.counter.value
  );

  return (
    <MainLayout>
      <Suspense fallback={<h1>Loading...</h1>}>
        <AuthProvider>
          <Routes>
            {routeList.map((route) => {
              return <Route path={route.path} element={route.element}></Route>;
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </AuthProvider>
      </Suspense>
    </MainLayout>
  );
};

export default App;
