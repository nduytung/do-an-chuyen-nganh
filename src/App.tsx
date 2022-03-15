import React from "react";
import { Provider, RootStateOrAny, useSelector } from "react-redux";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const counter: number = useSelector(
    (state: RootStateOrAny) => state.counter.value
  );

  return (
    <MainLayout>
      <div className="text-3xl font-bold text-blue-500 text-center w-full mt-20">
        hello world, this is the main content of web page. redux counter is
        currently: {counter}
      </div>
    </MainLayout>
  );
};

export default App;
