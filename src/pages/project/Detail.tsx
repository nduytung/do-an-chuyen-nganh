import React, { useState } from "react";
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

export const FullStory = () => {
  return (
    <section>
      <h1 className="text-[#00a85c] font-bold text-3xl"> Full story</h1>
      <p className="font-thin text-lg my-10">this is just a testing message</p>
    </section>
  );
};

const UpdatePath = ({
  date,
  title,
  desc,
}: {
  date: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex items-start gap-5 w-full">
      <span className="h-6 w-6 rounded-full bg-[#00a85c]"></span>
      <div className="w-full">
        <p className="text-[#00a85c] font-bold">{date}</p>
        <p className="font-bold text-2xl">{title}</p>
        <hr className="my-2 w-full" />
        <p className="font-thin text-lg">{desc}</p>
      </div>
    </div>
  );
};

const BackerList = () => {
  return (
    <table className="w-full">
      <tr className="border-b border-gray-300 w-full text-left">
        <th>Name</th>
        <th>Donate amount</th>
        <th>Date</th>
      </tr>
      <tr className="py-6 border-b border-gray-300 w-full text-left">
        <td>Nguyen Duy Tung</td>
        <td>$45000</td>
        <td>22-09-2022</td>
      </tr>
    </table>
  );
};

const Comment = () => {
  return (
    <section className="border border-gray-300 p-4 rounded-md">
      <div className="user flex items-center my-6 gap-4">
        <span className="bg-gray-400 rounded-full w-12 h-12"></span>
        <div>
          <p className="font-bold text-lg">By Nguyen Duy Tung</p>
          <p>22-11-2022</p>
        </div>
      </div>
      <hr className="my-3" />
      <p>this is just a testing comment jefwebwefw wefw ew ewf fe </p>
    </section>
  );
};
const Detail = () => {
  const [tab, setTab] = useState(1);

  const renderTab = () => {
    switch (tab) {
      case 1:
        return <FullStory />;
      case 2:
        return (
          <UpdatePath
            title="testing title 1"
            desc="this is just a wfew wefwe efwef ewiuk  eefw efw ek  testing message"
            date="25-09-2022"
          />
        );
      case 3:
        return <BackerList />;
      case 4:
        return <Comment />;
    }
  };

  return (
    <main className="">
      <div className="bg-gray-200 h-56 w-full"></div>
      <PageContainer classname="grid grid-cols-12 my-16 gap-8">
        <section className="col-span-6">
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
        </section>
        <section className="col-span-6 flex flex-col items-start">
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
        </section>
        <section className="col-span-12 bg-white shadow-lg py-4 px-5 my-8 border border-gray-100">
          <div className="flex justify-between items-center">
            <div className="grid grid-cols-4 w-2/3">
              <button
                onClick={() => setTab(1)}
                className="text-lg font-medium text-[#00a85c]"
              >
                Detail story
              </button>
              <button
                onClick={() => setTab(2)}
                className="text-lg font-medium text-[#00a85c]"
              >
                Updates
              </button>
              <button
                onClick={() => setTab(3)}
                className="text-lg font-medium text-[#00a85c]"
              >
                Backer list
              </button>
              <button
                onClick={() => setTab(4)}
                className="text-lg font-medium text-[#00a85c]"
              >
                Comment
              </button>
            </div>
            <PrimaryBtn callback={() => {}}>Create your Campaign</PrimaryBtn>
          </div>
        </section>
        <div className="w-full col-span-12 py-8 px-5 border border-gray-200 rounded-sm">
          {renderTab()}
        </div>
      </PageContainer>
    </main>
  );
};

export default Detail;
