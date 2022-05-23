import React, { useState, useRef, useEffect } from "react";
import PrimaryBtn from "../../components/ProjectDetail/PrimaryBtn";
import Tag from "../../components/ProjectDetail/Tag";
import PageContainer from "../../layouts/PageContainer";
import { Editor } from "@tinymce/tinymce-react";
import { EDITOR_SETTING } from "./NewProject";
import WhiteBtn from "../../components/WhiteBtn";
import DetailBg from "../../img/profilebg.jpeg";
import DefaultBg from "../../img/defaultbg.png";
import LiveComment from "../../components/LiveComment";
import { handleApi } from "../../api/handleApi";
import { useParams } from "react-router-dom";

export const WhiteBox = ({ value, name }: { value: number; name: string }) => {
  return (
    <div className="bg-white text-center p-4 flex-1 border border-gray-200 shadow-sm rounded-md cursor-pointer hover:bg-[#00a85c] hover:text-white">
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-lg font-light">{name}</p>
    </div>
  );
};

export const DonateCost = ({ children }: { children: string }) => {
  return (
    <div className="w-20 text-center text-gray-600 border-2 cursor-pointer rounded-full border-gray-300 focus-within:border-green-600 font-bold focus-within:text-[#00a85c] text-lg py-2">
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

const Reward = () => {
  return (
    <section className="bg-[#eff5f3] p-6 w-full">
      <h2 className="text-2xl font-bold text-[#00a85c]">Rewards</h2>
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
const Detail = () => {
  const [tab, setTab] = useState(1);
  const [project, setProject] = useState<any>({});

  const renderTab = () => {
    switch (tab) {
      case 1:
        return (
          <div className="w-full lg:grid lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FullStory />
            </div>
            <div className="lg:col-span-1">
              <LiveComment />
            </div>
          </div>
        );
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
  const { id } = useParams();

  useEffect(() => {
    //prefetch the whole info
    const fetchProject = async () => {
      const data = await handleApi({
        method: "get",
        endpoint: `project/detail/${id}`,
      });
      if (data) {
        setProject(data.data.props);
      }
    };

    fetchProject();
  }, []);

  return (
    <main className="">
      <div className="h-84 md:h-72 w-full overflow-hidden">
        <img src={DetailBg} alt="bg" className="w-full h-auto" />
      </div>
      <PageContainer classname="grid grid-cols-12 my-16 gap-8">
        <section className="col-span-12 md:col-span-6">
          <img src={DefaultBg} className="bg-gray-300 h-80 w-full" />
          <div>
            <h2 className="font-bold text-2xl text-black mt-6 mb-2">
              Short story
            </h2>
            <p
              className="text-gray-500 font-light text-base"
              dangerouslySetInnerHTML={{ __html: project.shortStory }}
            ></p>
          </div>
        </section>
        <section className="col-span-12 md:col-span-6 flex flex-col items-start">
          <Tag>{project.category}</Tag>
          <h1 className="font-bold text-3xl text-black mt-4 mb-2">
            {project && project.projectName}
          </h1>
          <div className="flex gap-3 w-full">
            <WhiteBox value={project.goal} name="Pledge" />
            <WhiteBox value={7550} name="Backer" />
            <WhiteBox value={7550} name="Day Left" />
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
          <div className="flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 md:w-2/3 gap-6 md:gap-0">
              <button
                onClick={() => setTab(1)}
                className="text-lg font-medium focus-within:text-[#00a85c]"
              >
                Detail story
              </button>
              <button
                onClick={() => setTab(2)}
                className="text-lg font-medium focus-within:text-[#00a85c]"
              >
                Updates
              </button>
              <button
                onClick={() => setTab(3)}
                className="text-lg font-medium focus-within:text-[#00a85c]"
              >
                Backer list
              </button>
              <button
                onClick={() => setTab(4)}
                className="text-lg font-medium focus-within:text-[#00a85c]"
              >
                Comment
              </button>
            </div>
            <PrimaryBtn
              classname={"text-sm lg:text-lg px-2"}
              callback={() => {}}
            >
              Create your Campaign
            </PrimaryBtn>
          </div>
        </section>
        <div className="w-full col-span-12 py-8 md:px-5 px-2 border border-gray-200 rounded-sm">
          {renderTab()}
        </div>
      </PageContainer>
    </main>
  );
};

export default Detail;
