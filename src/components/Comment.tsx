import React from "react";

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

export default Comment;
