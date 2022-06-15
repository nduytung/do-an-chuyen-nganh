import { Editor } from "@tinymce/tinymce-react";
import { message } from "antd";
import React, { useState, useEffect, useRef, useMemo, useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import io from "socket.io-client";
import { handleApi } from "../api/handleApi";
import { AuthContext } from "../context/AuthProvider";
import { EDITOR_SETTING } from "./input/PrimaryTextEditor";
import PrimaryBtn from "./ProjectDetail/PrimaryBtn";
import WhiteBtn from "./WhiteBtn";

const LiveComment = ({
  subject,
  projectId,
}: {
  subject: string;
  projectId: string | undefined;
}) => {
  const [chatItemList, setChatItemList] = useState<any>([]);
  const [socket, setSocket] = useState<any>(
    io("http://localhost:4000", {
      withCredentials: true,
    })
  );

  const editorRef = useRef<any>(null);
  const { username } = useContext(AuthContext);

  const handleSubmit = async () => {
    const message = editorRef.current.getContent();
    socket.emit("on-chat", { message: message });
    editorRef.current.setContent("");

    //calling api
    const data = await handleApi({
      method: "put",
      payload: { comment: message, id: projectId },
      endpoint: "project/comment",
    });
    console.log(data);
    if (data?.status === 200) {
      setChatItemList((chatItemList: any) => [
        ...chatItemList,
        { commentDetail: message },
      ]);
    }
    return;
  };

  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatItemList]);

  useEffect(() => {
    console.log(chatItemList);
  }, [chatItemList]);

  useEffect(() => {
    socket.on("user-chat", (message: any) => {
      console.log("received new message");
      console.log(message);
    });
  }, [socket]);

  useEffect(() => {
    const getComment = async () => {
      const data = await handleApi({
        method: "get",
        endpoint: `project/comment/all/${projectId}`,
      });

      const commentList = data.data.props.commentList.comment;

      return setChatItemList(commentList);
    };

    getComment();
  }, []);

  return (
    <div>
      <section className="bg-[#eff5f3] p-3 md:p-6 w-full">
        <article>
          <h1 className="text-[#00a85c] text-2xl font-semibold">Hi friend, </h1>
          <p className="font-semibold text-[#00a85c] italic">
            At here, we're glad to hear your comments about:{" "}
          </p>
          <p
            className="font-light"
            dangerouslySetInnerHTML={{ __html: subject }}
          ></p>
          <hr className="border-b border-gray-200 my-4" />
        </article>
        <div className="bg-white w-full h-96 rounded-md overflow-y-scroll grid grid-cols-1 items-start justify-start">
          {chatItemList.length > 0 &&
            chatItemList?.map((item: any) => {
              return (
                <div
                  className={`p-2  rounded-lg m-3 ${
                    username === item.username
                      ? "bg-gray-200 "
                      : "bg-[#00a85c] left-0 text-white"
                  } `}
                >
                  {item.username === username && (
                    <>
                      <article className="flex items-center gap-3">
                        <div className=" rounded-full overflow-hidden p-1">
                          <AiOutlineUser className="text-2xl" />
                        </div>
                        <p className="font-bold text-sm">{item?.username}</p>
                      </article>
                      <hr className=" border-gray-300 my-2" />
                    </>
                  )}
                  <p
                    className="font-light text-sm"
                    dangerouslySetInnerHTML={{ __html: item.commentDetail }}
                  />
                </div>
              );
            })}
          <div ref={messagesEndRef}></div>
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
