import React, { useState, useRef, useEffect, useContext } from "react";
import PrimaryBtn from "../../components/ProjectDetail/PrimaryBtn";
import Tag from "../../components/ProjectDetail/Tag";
import PageContainer from "../../layouts/PageContainer";
import { Editor } from "@tinymce/tinymce-react";
import { EDITOR_SETTING } from "../../components/input/PrimaryTextEditor";
import WhiteBtn from "../../components/WhiteBtn";
import DetailBg from "../../img/profilebg.jpeg";
import DefaultBg from "../../img/defaultbg.png";
import LiveComment from "../../components/LiveComment";
import { handleApi } from "../../api/handleApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { calcDateRange } from "../../components/ProjectCard";
import { BASE_URL } from "../../routes/baseURL";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import ConfirmModal from "../../components/modal/ConfirmModal";
import { momoPayment } from "../../api/momoPayment";
import FullStory from "../../components/FullStory";
import UpdatePath from "../../components/UpdatePath";
import BackerList from "../../components/BackerList";
import Comment from "../../components/Comment";
import WhiteBox from "../../components/WhiteBox";
import { createNewDate } from "./NewProject";

const Detail = () => {
  const [tab, setTab] = useState(1);
  const [project, setProject] = useState<any>({});
  const [image, setImage] = useState("");
  const [dayLeft, setDayLeft] = useState(0);
  const [user, setUser] = useState<any>({});
  const [backAmount, setBackAmount] = useState<any>(0);
  const [confirmDonate, setConfirmDonate] = useState(false);
  const { id } = useParams();
  const { isLoggedIn, userId } = useContext(AuthContext);

  const navigate = useNavigate();

  const renderTab = () => {
    switch (tab) {
      case 1:
        return (
          <div className="w-full lg:grid lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FullStory message={project.fullStory} />
            </div>
            {project.type === "research" && (
              <div className="lg:col-span-1">
                <LiveComment subject={project.researchDetail} />
              </div>
            )}
          </div>
        );
      case 2: {
        return project?.updatePath?.map((item: any) => {
          return (
            <UpdatePath
              title={item.title}
              desc={item.content}
              date={item.time}
            />
          );
        });
      }

      case 3:
        return <BackerList />;
      case 4:
        return <Comment />;
    }
  };

  useEffect(() => {
    //prefetch the whole info
    const fetchProject = async () => {
      const data = await handleApi({
        method: "get",
        endpoint: `project/detail/${id}`,
      });
      if (data) {
        console.log(data.data.props);
        setProject(data.data.props);

        //get image
        const imgData = await handleApi({
          method: "post",
          payload: { imageId: data.data.props.image },
          endpoint: "image/getById",
          disableNoti: true,
        });
        if (imgData.status === 200) {
          setImage(imgData.data.props.imageUrl);
        }

        //get user info

        const userInfo = await handleApi({
          method: "get",
          payload: {},
          endpoint: `users/info/${data.data.props.authorId}`,
          disableNoti: true,
        });
        if (userInfo.status === 200) {
          setUser(userInfo.data.props);
        }

        const left = calcDateRange(data.data.props.date.endTime);
        setDayLeft(left);
      }
    };

    fetchProject();
  }, []);

  //confirm donate function
  const handleBackCampaign = async () => {
    if (!isLoggedIn) navigate(BASE_URL.LOGIN);

    //check if user balance is enough to pay
    const loggedInUserInfo = await handleApi({
      method: "get",
      payload: {},
      endpoint: `users/info/${userId}`,
      disableNoti: true,
    });
    if (loggedInUserInfo.status !== 200) {
      return;
    }

    const { accountBalance, fullname } = loggedInUserInfo?.data?.props?.info;

    //if user's balance is not enough to pay
    if (parseInt(accountBalance) < parseInt(backAmount))
      toast.error(
        "Sorry, you don't have enough money or credits to pay for this"
      );
    else {
      //call momo api
      console.log("backAmout: " + backAmount);
      const data = await handleApi({
        method: "post",
        payload: {
          orderInfo: `Payment for project \"${project.projectName}\" `,
          amount: backAmount,
        },
        endpoint: "project/momo-trigger",
      });
      if (data) {
        //we got url here
        console.log(data?.data?.props?.payUrl);
        window.open(data?.data?.props?.payUrl, "_blank")?.focus();

        //if user scanned the QR ->
        //notify to the owner
        //minus the owner's money
        const notifyData = await handleApi({
          method: "post",
          payload: {
            projectName: project.projectName,
            moneyAmount: backAmount,
            ownerId: project.authorId,
          },
          endpoint: `users/notify`,
        });

        console.log(notifyData);

        //plus the money of the project
        const plusMoney = await handleApi({
          method: "put",
          payload: {
            projectId: project._id,
            donateAmount: parseInt(backAmount),
            raisedAmount: project.raised,
          },
          endpoint: "project/donate",
        });

        console.log(plusMoney);

        //add project to backer's backed list
        const newBacker = await handleApi({
          method: "put",
          payload: {
            name: fullname,
            amount: parseInt(backAmount),
            date: createNewDate(),
            projectId: project._id,
          },
          endpoint: `project/update-backer`,
        });

        console.log(newBacker);
      }
    }

    setConfirmDonate(false);
  };

  return (
    <main className="">
      <div className="h-84 md:h-72 w-full overflow-hidden">
        <img src={DetailBg} alt="bg" className="w-full h-auto" />
      </div>
      <PageContainer classname="grid grid-cols-12 my-16 gap-8">
        <section className="col-span-12 md:col-span-6">
          <img
            src={(image !== "" && image) || DefaultBg}
            className="bg-gray-300 h-80 w-full"
          />
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
            <WhiteBox
              value={(project?.backer && project.backer.length) || 0}
              name="Backer"
            />
            <WhiteBox value={dayLeft} name="Day Left" />
          </div>

          <div className="user flex items-center my-6 gap-4">
            <span className="bg-gray-400 rounded-full w-12 h-12"></span>
            <div>
              <Link
                to={`${BASE_URL.PROFILE}/${user?.info?._id}`}
                className="font-bold text-lg"
              >
                By {user.info?.fullname || ""}
              </Link>
              <p>{user?.projectList?.length || 0} campaigns</p>
            </div>
          </div>
          <div className="w-full text-xl my-8">
            <div className="flex justify-between font-bold text-[#00a85c]">
              <p>Raised</p>
              <p>{project.raised}</p>
            </div>
            <hr className="h-2 my-2 w-full bg-gray-400" />
            <p className="font-bold text-[#00a85c]">Goal: ${project.goal}</p>
          </div>

          <div className="flex items-center  gap-6 my-8">
            <div className="flex items-center justify-start">
              <p className="text-2xl font-light">$</p>
              <input
                type={"number"}
                value={backAmount}
                defaultValue={0}
                onChange={(e) => setBackAmount(e.target.value)}
                className="border-2 focus:outline-none border-gray-400 rounded-xl py-2 px-4 text-black text-xl w-24"
              />
            </div>
            <PrimaryBtn
              disabled={
                calcDateRange(project?.date?.endTime) > 0 ? false : true
              }
              callback={() =>
                parseInt(backAmount) > 0 && setConfirmDonate(true)
              }
            >
              Back Campaign
            </PrimaryBtn>
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
              callback={() => {
                navigate(BASE_URL.NEW_PROJECT);
              }}
            >
              Create your Campaign
            </PrimaryBtn>
          </div>
        </section>
        <div className="w-full col-span-12 py-8 md:px-5 px-2 border border-gray-200 rounded-sm">
          {renderTab()}
        </div>
      </PageContainer>

      <ConfirmModal
        content={`Are you sure that you want to donate for this project? It'll cost ${backAmount}.000 VND from your balance`}
        isVisible={confirmDonate}
        setVisible={setConfirmDonate}
        handleDelete={() => handleBackCampaign()}
      />
    </main>
  );
};

export default Detail;
