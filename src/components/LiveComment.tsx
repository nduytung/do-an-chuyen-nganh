import { Editor } from "@tinymce/tinymce-react";
import { message } from "antd";
import React, { useState, useEffect, useRef, useMemo, useContext } from "react";
import io from "socket.io-client";
import { handleApi } from "../api/handleApi";
import { AuthContext } from "../context/AuthProvider";
import { EDITOR_SETTING } from "../pages/project/NewProject";
import PrimaryBtn from "./ProjectDetail/PrimaryBtn";
import WhiteBtn from "./WhiteBtn";

export const TESTING_PROJECT_ID = "627b6b545e1a4a518c9e68e3";

const LiveComment = () => {
  const [chatItemList, setChatItemList] = useState<any>([]);
  const [socket, setSocket] = useState<any>(null);
  const [trigger, setTrigger] = useState<boolean>(false);

  const editorRef = useRef<any>(null);
  const { username } = useContext(AuthContext);

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
        setChatItemList([...chatItemList, { commentDetail: message.message }]);
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

      return setChatItemList(commentList);
    };

    getComment();
  }, []);

  useEffect(() => {
    console.log(chatItemList);
  }, [chatItemList]);

  return (
    <div>
      <section className="bg-[#eff5f3] p-3 md:p-6 w-full">
        <div className="bg-white w-full h-96 rounded-md overflow-y-scroll grid grid-cols-1 items-start justify-start">
          {chatItemList.map((item: any) => {
            return (
              <div
                className={`p-4 relative rounded-lg m-3 w-4/5 ${
                  username === item.username
                    ? "bg-gray-200 justify-self-end"
                    : "bg-[#00a85c] left-0 justify-self-start"
                } `}
              >
                <p> {username !== item.username ? username : null} </p>
                <p dangerouslySetInnerHTML={{ __html: item.commentDetail }} />
              </div>
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
