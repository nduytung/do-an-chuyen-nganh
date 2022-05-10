import React, { Suspense } from "react";
import { Provider, RootStateOrAny, useSelector } from "react-redux";
import MainLayout from "./layouts/Mainlayout";
import { Routes, Route } from "react-router-dom";
import { routeList } from "./routes/routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const counter: number = useSelector(
    (state: RootStateOrAny) => state.counter.value
  );

  return (
    <MainLayout>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          {routeList.map((route) => {
            return <Route path={route.path} element={route.element}></Route>;
          })}
        </Routes>
        <ToastContainer />
      </Suspense>
    </MainLayout>
  );
};

export default App;
