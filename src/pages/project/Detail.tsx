import React from "react";
import PrimaryBtn from "../../components/ProjectDetail/PrimaryBtn";
import Tag from "../../components/ProjectDetail/Tag";
import PageContainer from "../../layouts/PageContainer";

export const WhiteBox = ({ value, name }: { value: number; name: string }) => {
  return (
    <div className="bg-white p-4 flex-1 border border-gray-200 shadow-sm rounded-md cursor-pointer hover:bg-[#00a85c] hover:text-white">
      <p className="text-2xl font-bold">${value}</p>
      <p className="text-lg font-light">{name}</p>
    </div>
  );
};

export const DonateCost = ({ children }: { children: string }) => {
  return (
    <div className="w-20 text-center text-gray-600 border-2 cursor-pointer rounded-full border-gray-300 hover:border-green-600 font-bold hover:text-[#00a85c] text-lg py-2">
      ${children}
    </div>
  );
};
const Detail = () => {
  return (
    <main className="">
      <div className="bg-gray-200 h-56 w-full"></div>
      <PageContainer>
        <div className="grid grid-cols-12 my-16 gap-8">
          <div className="col-span-6">
            <div className="bg-gray-300 h-80"></div>
            <div>
              <h2 className="font-bold text-2xl text-black mt-6 mb-2">
                Short story
              </h2>
              <p className="text-gray-500 font-light text-base">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium.
              </p>
            </div>
          </div>
          <div className="col-span-6 flex flex-col items-start">
            <Tag>Video{" & "}Film</Tag>
            <h1 className="font-bold text-3xl text-black mt-4 mb-2">
              Personal All-In-One Home Gym {"&"} Workout Coach
            </h1>
            <div className="flex gap-3 w-full">
              <WhiteBox value={7550} name="Pledge" />
              <WhiteBox value={7550} name="Pledge" />
              <WhiteBox value={7550} name="Pledge" />
            </div>

            <div className="user flex items-center my-6 gap-4">
              <span className="bg-gray-400 rounded-full w-12 h-12"></span>
              <div>
                <p className="font-bold text-lg">By Nguyen Duy Tung</p>
                <p>9 campaigns</p>
              </div>
            </div>
            <div className="w-full text-xl my-8">
              <div className="flex justify-between font-bold text-[#00a85c]">
                <p>Raised</p>
                <p>37,5%</p>
              </div>
              <hr className="h-2 my-2 w-full bg-gray-400" />
              <p className="font-bold text-[#00a85c]">Goal: $19000</p>
            </div>

            <div className="flex justify-between gap-2">
              <DonateCost>50</DonateCost>
              <DonateCost>50</DonateCost>
              <DonateCost>50</DonateCost>
              <DonateCost>50</DonateCost>
            </div>

            <div className="flex items-center gap-6 my-8">
              <div className="flex items-center">
                <p className="text-2xl font-light">$</p>
                <div className="border-2 border-gray-400 rounded-xl py-2 px-4 text-black text-xl">
                  30
                </div>
              </div>
              <PrimaryBtn callback={() => {}}>Back Campaign</PrimaryBtn>
            </div>
          </div>
        </div>
      </PageContainer>
    </main>
  );
};

export default Detail;
