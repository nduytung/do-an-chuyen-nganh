import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import ProjectCard, { calcDateRange } from "../components/ProjectCard";
import PrimaryBtn from "../components/ProjectDetail/PrimaryBtn";
import PageContainer from "../layouts/PageContainer";
import DefaultAvt from "../img/defaultavt.jpeg";
import ProfileBg from "../img/profilebg.jpeg";
import WhiteBtn from "../components/WhiteBtn";
import withAuth from "../helper/withAuth";
import { AuthContext } from "../context/AuthProvider";
import { useParams } from "react-router-dom";
import { handleApi } from "../api/handleApi";
import ConfirmModal from "../components/modal/ConfirmModal";
import { SectionTitle } from "./Landing";

const SummaryBox = ({
  money,
  title,
  desc,
}: {
  money: number;
  title: string;
  desc: string;
}) => {
  return (
    <article className="py-8 px-6 rounded-md md:my-10 my-3 cursor-pointer bg-[#eff5f4] hover:bg-[#00a85c] hover:text-white">
      <h2 className="text-5xl font-bold ">${money}</h2>
      <p className="text-lg font-semibold mt-6">{title}</p>
      <p>{desc}</p>
    </article>
  );
};
const Profile = () => {
  const { id } = useParams();
  const { setUserProfile, userProfile } = useContext(AuthContext);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState("");

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const getUserInfo = async () => {
      const data = await handleApi({
        method: "get",
        payload: {},
        endpoint: `users/info/${id}`,
      });
      if (data.status === 200) console.log(data);
      setUserProfile(data.data.props);
    };
    getUserInfo();
  }, []);

  const handleDelete = async () => {
    //call api to delete project
    const deleteResult = await handleApi({
      method: "delete",

      endpoint: `project/delete/${selectedProjectId}`,
    });

    console.log(deleteResult);
    if (deleteResult.status === 200) {
      setDeleteModalVisible(false);
    }
  };

  const handleDisplayModal = (projectId: string) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    setSelectedProjectId(projectId);
    setDeleteModalVisible(true);
  };
  return (
    <main>
      <img src={ProfileBg} className="bg-black opacity-50 h-64 w-full" />
      <PageContainer>
        <img
          src={DefaultAvt}
          alt="default_avt"
          className="bg-gray-200 rounded-full h-44 w-44 mx-auto my-6"
        />
        <h1 className="text-3xl font-bold text-[#00a85c] text-center">
          {(userProfile?.info && userProfile?.info?.fullname) || null} (@
          {(userProfile?.info && userProfile?.info?.username) || null})
        </h1>

        <section className="bg-white shadow-lg py-4 px-5 my-8 border border-gray-100">
          <div className="flex justify-between items-center">
            <div className="grid grid-cols-3 w-2/3">
              <button
                onClick={() => setActiveTab(1)}
                className="text-lg font-medium text-black focus-within:text-[#00a85c]"
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab(2)}
                className="text-lg font-medium text-black focus-within:text-[#00a85c]"
              >
                My Account
              </button>
              <button
                onClick={() => setActiveTab(3)}
                className="text-lg font-medium text-black focus-within:text-[#00a85c]"
              >
                Campaign
              </button>
            </div>
            <PrimaryBtn callback={() => {}}>Add New Campaign</PrimaryBtn>
          </div>
        </section>

        {/* summary section */}
        {activeTab === 1 && (
          <main>
            <section className="border border-gray-100 shadow-lg p-6">
              <div className="flex md:flex-row flex-col justify-between items-center">
                <h2 className="text-[#00a85c] font-bold text-3xl">Summary</h2>
                <div className="flex flex-col md:flex-row gap-3 font-thin items-center">
                  <p>From</p>
                  <input
                    type="date"
                    value={moment(new Date()).format("YYYY-MM-DD")}
                    className="border border-gray-200 rounded-sm py-2 px-4 focus:outline-none"
                  />
                  <p>To</p>
                  <input
                    value={moment(new Date()).format("YYYY-MM-DD")}
                    type="date"
                    max={moment(new Date()).format("YYYY-MM-DD")}
                    className="border border-gray-200 rounded-sm py-2 px-4 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 mt-5 md:mt-0">
                <SummaryBox
                  title="User's account balance in total"
                  money={userProfile?.info && userProfile?.info?.accountBalance}
                  desc="How much you have left in this account"
                />
                <SummaryBox
                  title="Spent"
                  money={userProfile?.info && userProfile?.info?.spent}
                  desc="How much you have spent so far"
                />
                <SummaryBox
                  title="Total money this month"
                  money={
                    userProfile?.info &&
                    userProfile?.info?.accountBalance + userProfile?.info?.spent
                  }
                  desc="Total money"
                />
              </div>
            </section>

            {/* combine info section */}
            <section className="flex flex-col xl:flex-row gap-8 my-12">
              <main className="flex-1 border border-gray-100 shadow-md p-6">
                <h2 className="text-[#00a85c] text-2xl font-bold">
                  My Campaign
                </h2>
                <hr className="my-4" />
                {userProfile?.projectList &&
                userProfile?.projectList?.length === 0 ? (
                  <p className="text-lg font-light">
                    {": ("} It looks like you don't have any campaign yet
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 xl:gap-4">
                    {userProfile?.projectList.map((project: any) => {
                      return (
                        <ProjectCard
                          cate={project?.category}
                          title={project?.projectName}
                          raised={project?.raised}
                          goal={project?.goal}
                          startTime={project?.date?.startTime}
                          endTime={project?.date?.endTime}
                          background={project?.image}
                          authorId={userProfile?.info?._id}
                          allowDelete={true}
                          projectId={project?._id}
                          handleDelete={handleDisplayModal}
                        />
                      );
                    })}
                  </div>
                )}
              </main>
              <main className="flex-1 grid gap-10">
                <div className="border border-gray-100 shadow-md p-6">
                  <h2 className="text-[#00a85c] text-2xl font-bold">
                    My Balance
                  </h2>
                  <hr className="my-4" />
                  <p className="text-lg font-light">
                    Current balance: ${userProfile?.info?.accountBalance}
                  </p>
                </div>
                <div className="border border-gray-100 shadow-md p-6">
                  <h2 className="text-[#00a85c] text-2xl font-bold">
                    My Information
                  </h2>
                  <hr className="my-4" />
                  <form action="">
                    <div className="grid md:grid-cols-4 items-center gap-4 my-3">
                      <p className="text-lg font-semibold col-span-1">
                        Username:{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        value={userProfile?.info?.username}
                        className="col-span-3 border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none"
                      />
                    </div>
                    <div className="grid md:grid-cols-4 items-center gap-4 my-3">
                      <p className="text-lg font-semibold col-span-1">
                        Fullname:{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        value={userProfile?.info?.fullname}
                        className="col-span-3 border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none"
                      />
                    </div>
                    <div className="grid md:grid-cols-4 items-center gap-4 my-3">
                      <p className="text-lg font-semibold col-span-1">
                        Email:{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        value={userProfile?.info?.email}
                        className="col-span-3 border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none"
                      />
                    </div>
                    <div className="grid md:grid-cols-4 items-center gap-4 my-3">
                      <p className="text-lg font-semibold col-span-4">
                        Password:{" "}
                      </p>
                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Your OLD password"
                        value=""
                        className="col-span-4 border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none"
                      />
                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Your new password"
                        value=""
                        className="col-span-2 border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none"
                      />
                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Your new password"
                        value=""
                        className="col-span-2 border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none"
                      />
                    </div>
                    <div className="flex md:justify-end right-0 w-full gap-4 items-center mt-8 md:mt-5">
                      <WhiteBtn classname={"w-1/4"} callback={() => {}}>
                        Cancel
                      </WhiteBtn>
                      <PrimaryBtn classname="w-1/4" callback={() => {}}>
                        Submit
                      </PrimaryBtn>
                    </div>
                  </form>
                </div>
              </main>
            </section>
          </main>
        )}
        {activeTab === 2 && (
          <main className="my-36">
            <SectionTitle
              subHeader="Donated"
              header="Check out projects you have donated"
              classname="text-center"
            />
            {/* {projects?.length === 0 ? ( */}
            <p className="text-center w-5/6 text-lg font-light mx-auto">
              It looks like it doesnt have any ended project here :( please
              comeback later{" "}
            </p>
            {/* ) : (
        projects?.map((project: any) => (
          <ProjectCard
            cate={project?.category}
            title={project?.projectName}
            raised={project?.raised}
            goal={project?.goal}
            startTime={project?.date?.startTime}
            endTime={project?.date?.endTime}
            background={project?.image}
            allowDelete={true}
            projectId={project?._id}
            handleDelete={() => {}}
          />
        ))
      )} */}
          </main>
        )}
        <ConfirmModal
          content="Are you sure you want to delete this project?"
          isVisible={deleteModalVisible}
          setVisible={setDeleteModalVisible}
          handleDelete={() => handleDelete()}
        />
      </PageContainer>
    </main>
  );
};

export default Profile;
