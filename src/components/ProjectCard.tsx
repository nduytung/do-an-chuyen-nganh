import moment from "moment";
import React, { useEffect, useState } from "react";
import { handleApi } from "../api/handleApi";
import defaultBg from "../img/defaultbg.png";

type ProjectCardType = {
  cate: string;
  title: string;
  raised: number;
  goal: number;
  startTime: string;
  endTime: string;
  background?: string;
};

export const calcDateRange = (startTime: string, endTime: string) => {
  const start = moment(startTime, "YYYY-MM-DD");
  const end = moment(endTime, "YYYY-MM-DD");
  return moment.duration(end.diff(start)).asDays();
};

const ProjectCard = ({
  cate,
  title,
  raised,
  goal,
  startTime,
  endTime,
  background,
}: ProjectCardType) => {
  const percent = (raised / goal) * 100;
  const [image, setImage] = useState("");
  const [dayLeft, setDayLeft] = useState(0);

  useEffect(() => {
    const handleGetBg = async () => {
      console.log("getting image");
      if (background) {
        const imgData = await handleApi({
          method: "post",
          payload: { imageId: background },
          endpoint: "image/getById",
          disableNoti: true,
        });
        if (imgData.status === 200) {
          setImage(imgData.data.props.imageUrl);
          console.log("get image done");
        }
      }
    };
    handleGetBg();
    const left = calcDateRange(startTime, endTime);
    setDayLeft(left);
  }, []);
  return (
    <main className="bg-white border border-gray-100 shadow-md">
      <img
        className="bg-gray-200 w-full h-56"
        alt="default-bg"
        src={image ? image : defaultBg}
      />

      <div className="p-6 flex flex-col items-start">
        <div className="p-6 px-3 py-2 text-white font-semibold text-lg bg-[#00a85c] -mt-12">
          {cate}
        </div>
        <h2 className="font-bold text-2xl my-6">{title}</h2>
        <div className="flex items-center justify-between w-full">
          <p>Raised: ${raised}</p>
          <p>{percent}%</p>
        </div>
        <p className="text-lg font-bold my-4">
          Goal: <span className="text-[#00a85c]">${goal}</span>
        </p>
        <div className="bg-gray-100 p-3 flex justify-between items-center w-full hover:border-[#00a85c]  hover:border cursor-pointer">
          {dayLeft || 0} days left!{" "}
          <span className="text-[#00a85c]"> Register now</span>
        </div>
      </div>
    </main>
  );
};

export default ProjectCard;
