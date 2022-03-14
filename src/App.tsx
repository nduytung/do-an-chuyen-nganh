import React from "react";
import { Provider, RootStateOrAny, useSelector } from "react-redux";
import Mainlayout from "./layouts/Mainlayout";

const App = () => {
  const counter = useSelector((state: RootStateOrAny) => state.counter.value);
  return (
    <Mainlayout>
      <div className="text-3xl font-bold text-red-500 text-center w-full mt-20">
        hello world, this is the main content of web page. redux counter is
        currently:
        {counter}
      </div>
    </Mainlayout>
  );
};

export default App;
