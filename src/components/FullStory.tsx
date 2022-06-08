import React from "react";

const FullStory = ({ message }: { message: string }) => {
  return (
    <section>
      <h1 className="text-[#00a85c] font-bold text-3xl"> Full story</h1>
      <div
        dangerouslySetInnerHTML={{ __html: message }}
        className="font-thin text-lg my-10"
      ></div>
    </section>
  );
};

export default FullStory;
