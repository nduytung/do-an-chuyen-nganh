import { Editor } from "@tinymce/tinymce-react";
import { message } from "antd";
import React, { useState, useEffect, useRef, useMemo } from "react";
import io from "socket.io-client";
import { handleApi } from "../api/handleApi";
import { EDITOR_SETTING } from "../pages/project/NewProject";
import PrimaryBtn from "./ProjectDetail/PrimaryBtn";
import WhiteBtn from "./WhiteBtn";

export const TESTING_PROJECT_ID = "627b66a3e9f28cc8bf90dc3c";

const LiveComment = () => {
  const [chatItemList, setChatItemList] = useState<any>([]);
  const [socket, setSocket] = useState<any>(null);
  const [trigger, setTrigger] = useState<boolean>(false);

  const editorRef = useRef<any>(null);

  const handleSubmit = async () => {
    const message = editorRef.current.getContent();
    setTrigger(!trigger);
    socket && socket.emit("on-chat", { message: message });

    //calling api
    await handleApi({
      method: "put",
      payload: { comment: message, id: TESTING_PROJECT_ID },
      endpoint: "project/comment",
    });
  };

  useEffect(() => {
    if (socket === null) {
      setSocket(
        io("http://localhost:4000", {
          withCredentials: true,
        })
      );
    } else {
      socket.on("user-chat", (message: any) => {
        setChatItemList([...chatItemList, message.message]);
      });
    }
  }, [trigger]);

  useEffect(() => {
    const getComment = async () => {
      const data = await handleApi({
        method: "get",
        endpoint: `project/comment/all/${TESTING_PROJECT_ID}`,
      });

      const commentList = data.data.props.commentList.comment;
      console.log(commentList);
      if (commentList) {
        commentList.map((comment: { commentDetail: string }) => {
          return setChatItemList([...chatItemList, comment.commentDetail]);
        });
      }
    };

    getComment();
  }, []);

  useEffect(() => {
    console.log(chatItemList);
  }, [chatItemList]);

  return (
    <div>
      <section className="bg-[#eff5f3] p-3 md:p-6 w-full">
        <div className="bg-white w-full h-96 rounded-md overflow-y-scroll">
          {chatItemList.map((item: any) => {
            return (
              <div
                className="py-2 px-4 rounded-lg bg-[#00a85c] m-3"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            );
          })}
        </div>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{ ...EDITOR_SETTING, height: 200 }}
        />
        <div className="flex justify-start lg:justify-between gap-4 my-5">
          <PrimaryBtn classname="lg:flex-1" callback={handleSubmit}>
            Send
          </PrimaryBtn>
          <WhiteBtn classname="lg:flex-1" callback={() => {}}>
            Cancel
          </WhiteBtn>
        </div>
      </section>
    </div>
  );
};

export default LiveComment;
