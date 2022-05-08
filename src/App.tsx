import React from "react";
import { Provider, RootStateOrAny, useSelector } from "react-redux";
import MainLayout from "./layouts/Mainlayout";
import { Routes, Route } from "react-router-dom";
import { routeList } from "./routes/routes";

const App = () => {
  const counter: number = useSelector(
    (state: RootStateOrAny) => state.counter.value
  );

  return (
    <MainLayout>
       <Routes>
        {routeList.map((route) => {
          return <Route path={route.path} element={route.element}></Route>;
        })}
      </Routes>
    </MainLayout>
  );
};

export default App;
