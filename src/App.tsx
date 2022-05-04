import React, { Suspense } from "react";
import { Provider, RootStateOrAny, useSelector } from "react-redux";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import { routeList } from "./routes/routes";
const App = () => {
  const counter: number = useSelector(
    (state: RootStateOrAny) => state.counter.value
  );

  return (
    <MainLayout>
      <Suspense fallback={() => <h1>Loading...</h1>}>
        <Routes>
          {routeList.map((route) => {
            return <Route path={route.path} element={route.element}></Route>;
          })}
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default App;
