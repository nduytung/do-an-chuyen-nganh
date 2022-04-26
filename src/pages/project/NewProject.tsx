import React, { useRef } from "react";
import PageContainer from "../../layouts/PageContainer";
import { SectionTitle } from "../Landing";
import { WhiteBox, DonateCost } from "./Detail";
import Tag from "../../components/ProjectDetail/Tag";
import PrimaryBtn from "../../components/ProjectDetail/PrimaryBtn";
import { Editor } from "@tinymce/tinymce-react";
import moment from "moment";

export const EDITOR_SETTING = {
  height: 500,
  menubar: false,
  plugins: [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "charmap",
    "anchor",
    "searchreplace",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "preview",
    "help",
    "wordcount",
  ],
  toolbar:
    "undo redo | blocks | image " +
    "bold italic forecolor | alignleft aligncenter " +
    "alignright alignjustify | bullist numlist outdent indent | " +
    "removeformat | link ",
  content_style:
    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
  image_list: [],
};

const INPUT_FORMAT =
  "border border-gray-300 py-2 px-4 rounded-md mb-4 mt-2 focus:outline-none";

const NewProject = () => {
  const editorRef = useRef<any>(null);

  const logEditorContent = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <main>
      <section className="bg-gray-200 w-full h-56"></section>
      <PageContainer>
        <SectionTitle
          subHeader="new campaign"
          header="start your new campaign"
          classname="mx-auto text-center my-8"
        />
        <main className="">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-6">
              <div className="bg-gray-300 h-72"></div>
              <div>
                <h2 className="font-bold text-2xl text-black my-4">
                  Enter your short story
                </h2>
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  init={EDITOR_SETTING}
                />
              </div>
            </div>
            <div className="col-span-6 flex flex-col items-start gap-10">
              <div className="border border-gray-200 shadow-sm w-full p-6 rounded-md">
                <div className="name w-full">
                  <h3 className="font-bold text-lg">Enter your project name</h3>
                  <input type={"text"} className={`${INPUT_FORMAT} w-full`} />
                </div>

                <div className="flex gap-3 justify-between items-center">
                  <div className="category flex-1 w-full">
                    <h3 className="font-bold text-lg">Choose your category</h3>
                    <select className={`${INPUT_FORMAT} w-full`}>
                      <option value="disabled" disabled selected>
                        Choose your cate
                      </option>
                      <option value="testing 1">this is the testing 1</option>
                      <option value="testing 2">this is the testing 2</option>
                    </select>
                  </div>
                  <div className="category flex-1 w-full">
                    <h3 className="font-bold text-lg">
                      Choose your project type
                    </h3>
                    <select className={`${INPUT_FORMAT} w-full`}>
                      <option value="disabled" disabled selected>
                        Choose your type
                      </option>
                      <option value="testing 1">this is the testing 1</option>
                      <option value="testing 2">this is the testing 2</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 shadow-sm w-full rounded-md p-6 m">
                <h2 className="text-2xl mt-6 font-bold text-[#00a85c]">
                  Project indeed details
                </h2>
                <div className="name w-full mt-4">
                  <h3 className="font-bold text-lg">
                    Your target money amount:{" "}
                  </h3>
                  <input type={"number"} className={`${INPUT_FORMAT} w-full`} />
                </div>
                <div className="name w-full mt-4">
                  <h3 className="font-bold text-lg">Pick your end date</h3>
                  <input
                    value={moment(new Date()).format("YYYY-MM-DD")}
                    min={moment(new Date()).format("YYYY-MM-DD")}
                    type={"date"}
                    className={`${INPUT_FORMAT} w-full`}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <h2 className="font-bold text-2xl text-black my-4">
                Enter your full story
              </h2>
              <Editor
                onInit={(evt, editor) => (editorRef.current = editor)}
                init={EDITOR_SETTING}
              />
            </div>
          </div>
        </main>
      </PageContainer>
    </main>
  );
};

export default NewProject;
