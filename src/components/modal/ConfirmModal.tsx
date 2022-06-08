import React, { useEffect } from "react";
import PrimaryBtn from "../ProjectDetail/PrimaryBtn";
import WhiteBgBtn from "../ProjectDetail/WhiteBgBtn";

export interface IConfirmModal {
  content: string;
  isVisible: boolean;
  setVisible: Function;
  handleDelete: () => void;
}
const ConfirmModal = ({
  content,
  isVisible,
  setVisible,
  handleDelete,
}: IConfirmModal) => {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }, [isVisible]);
  return (
    <div className={`${isVisible ? "block" : "hidden"}`}>
      <article
        onClick={() => setVisible(false)}
        className="absolute bg-black top-0 bottom-0 left-0 right-0 z-50 opacity-40"
      ></article>
      <div className="w-96 bg-white m-auto absolute top-56 left-0 right-0 z-50 rounded-lg p-5">
        <h1 className="text-red-500 font-semibold text-2xl">Warning!</h1>
        <hr className="border-t border-gray-200 my-5 w-full" /> {content}
        <div className="flex items-center-justify-between mt-8 w-full gap-6">
          <button onClick={handleDelete} className="flex-1 text-[#00a85c]">
            Confirm
          </button>
          <button
            onClick={() => setVisible(false)}
            className="flex-1 text-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
