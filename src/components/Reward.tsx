import React from "react";
import PrimaryBtn from "./ProjectDetail/PrimaryBtn";

const Reward = () => {
  return (
    <section className="bg-[#eff5f3] p-6 w-full">
      <h2 className="text-2xl font-bold text-[#54b5f1]">Rewards</h2>
      <hr className="my-3" />
      <div className="bg-gray-300 w-full h-44 my-5"></div>
      <h3 className="font-bold text-xl">$300 or more</h3>
      <p className="text-gray-600 font-light text-base text-justify">
        But must explain to you how all this mistaken idea of denouncing plasue
        and praising pain was born.
      </p>
      <hr className="my-3" />
      <div className="flex text-black font-bold justify-between">
        <p>1 backers</p>
        <p>97 rewards</p>
      </div>
      <PrimaryBtn classname="w-full mt-4" callback={() => {}}>
        Select Reward
      </PrimaryBtn>
    </section>
  );
};
export default Reward;
