import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleApi } from "../api/handleApi";
import defaultBg from "../img/defaultbg.png";
import { BASE_URL } from "../routes/baseURL";

type ProjectCardType = {
  cate: string;
  title: string;
  startTime: string;
  endTime: string;
  background?: any;
  description: string;
  id: string;
};

const AdvisingProjectCard = ({
  cate,
  title,
  startTime,
  endTime,
  background,
  description,
  id,
}: ProjectCardType) => {
  const navigate = useNavigate();

  const handleRenderProject = () => {
    navigate(`${BASE_URL.DETAIL_PROJECT}/${id}`);
  };

  const [image, setImage] = useState("");
  const [dayLeft, setDayLeft] = useState(1);

  useEffect(() => {
    const handleGetBg = async () => {
      console.log("getting image");
      if (background !== []) {
        const imgData = await handleApi({
          method: "post",
          payload: { imageId: background },
          endpoint: "image/getById",
          disableNoti: true,
        });
        if (imgData.status === 200) setImage(imgData.data.props.imageUrl);
      }
    };
    handleGetBg();
    const start = moment(startTime, "YYYY-MM-DD");
    const end = moment(endTime, "YYYY-MM-DD");
    const left = moment.duration(end.diff(start)).asDays() + 1;
    console.log(left);
    setDayLeft(left);
  }, []);

  return (
    <main className="bg-white border border-gray-100 shadow-md flex flex-col md:flex-row">
      <img
        className="bg-gray-200  md:w-56 xl:w-64 lg:h-full"
        alt="default-bg"
        src={image !== "" ? image : defaultBg}
      />

      <div className="p-6 flex w-full flex-col items-start h-full">
        <div className="p-6 px-3 py-2 text-white font-semibold text-lg bg-[#00a85c] ">
          {cate}
        </div>
        <h2 className="font-bold lg:text-xl xl:text-2xl mt-6 mb-3">{title}</h2>
        <div className="w-full my-3">
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>

        <button
          onClick={handleRenderProject}
          className="bg-gray-100 p-3 flex lg:flex-col xl:flex-row justify-between items-center w-full hover:border-[#00a85c]  hover:border cursor-pointer"
        >
          {dayLeft} days left!{" "}
          <span className="text-[#00a85c]"> Register now</span>
        </button>
      </div>
    </main>
  );
};

export default AdvisingProjectCard;
