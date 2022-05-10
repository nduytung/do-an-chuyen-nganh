import React, { useEffect, useRef, useState } from "react";
import PageContainer from "../../layouts/PageContainer";
import { SectionTitle } from "../Landing";
import { WhiteBox, DonateCost } from "./Detail";
import Tag from "../../components/ProjectDetail/Tag";
import PrimaryBtn from "../../components/ProjectDetail/PrimaryBtn";
import { Editor } from "@tinymce/tinymce-react";
import moment from "moment";
import CreateProjectBg from "../../img/creatprojectbg.webp";
import DefaultBg from "../../img/defaultbg.png";
import { CATE_LIST } from "../../data/categories";
import { Item } from "rc-menu";
import { toast } from "react-toastify";
import { handleApi } from "../../api/handleApi";

const createNewDate = () => moment(new Date()).format("YYYY-MM-DD");

export const EDITOR_SETTING = {
  height: 500,
  innerWidth: 300,
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

export interface IProject {
  projectName: string;
  type: "donate" | "research" | undefined;
  userId: string;
  goal: number;
  shortStory: string;
  fullStory: string;
  // image: string;
  category:
    | "Education"
    | "Medical & heath"
    | "Fashion"
    | "Video & Filming"
    | "Technologies"
    | "Design";
  date: {
    startTime: string | undefined;
    endTime: string | undefined;
  };
}
const INPUT_FORMAT =
  "border border-gray-300 py-2 px-4 rounded-md mb-4 mt-2 focus:outline-none";

const NewProject = () => {
  const shortStoryRef = useRef<any>(null);
  const fullStoryRef = useRef<any>(null);

  const [project, setProject] = useState<IProject>({
    projectName: "",
    type: undefined,
    userId: "25",
    goal: 0,
    shortStory: "",
    fullStory: "null",
    //image: "",
    category: "Design",
    date: {
      startTime: undefined,
      endTime: undefined,
    },
  });

  const handleChange = (e: any) => {
    e.target.name !== "endTime"
      ? setProject({ ...project, [e.target.name]: e.target.value })
      : setProject({
          ...project,
          date: { ...project.date, endTime: e.target.value },
        });
  };

  const handleSubmit = async () => {
    setProject({
      ...project,
      shortStory: shortStoryRef.current.getContent(),
      fullStory: fullStoryRef.current.getContent(),
      date: { ...project.date, startTime: createNewDate() },
    });

    const data = await handleApi({
      method: "post",
      payload: project,
      endpoint: "project/create",
    });
    console.log(data);
  };

  return (
    <main>
      <PageContainer>
        <SectionTitle
          subHeader="new campaign"
          header="start your new campaign"
          classname="mx-auto text-center my-8"
        />
        <main className="">
          <div className="md:grid md:grid-cols-12 gap-10">
            <div className="md:col-span-6 mb-8 md:mb-0">
              <img src={DefaultBg} className="bg-gray-300 h-72 w-full" />
              <div>
                <h2 className="font-bold text-2xl text-black my-4">
                  Enter your short story
                </h2>

                <Editor
                  id="editor1"
                  onInit={(evt, editor) => (shortStoryRef.current = editor)}
                  init={EDITOR_SETTING}
                />
              </div>
            </div>
            <div className="md:col-span-6 flex flex-col items-start gap-10">
              <div className="border border-gray-200 shadow-sm w-full p-6 rounded-md">
                <div className="name w-full">
                  <label className="font-bold text-lg">
                    Enter your project name
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    name="projectName"
                    type={"text"}
                    className={`${INPUT_FORMAT} w-full`}
                  />
                </div>

                <div className="flex gap-3 justify-between items-center">
                  <div className="category flex-1 w-full">
                    <label className="font-bold text-lg">
                      Choose your category type
                    </label>
                    <select
                      name="category"
                      onChange={(e) => handleChange(e)}
                      className={`${INPUT_FORMAT} w-full`}
                    >
                      <option disabled selected>
                        {" "}
                        Choose your category
                      </option>
                      {CATE_LIST.map((item: string) => {
                        return <option value="item">{item}</option>;
                      })}
                    </select>
                  </div>
                  <div className="category flex-1 w-full">
                    <h3 className="font-bold text-lg">
                      Choose your project type
                    </h3>
                    <select
                      name="type"
                      onChange={(e) => handleChange(e)}
                      className={`${INPUT_FORMAT} w-full`}
                    >
                      <option value="disabled" disabled selected>
                        Choose your type
                      </option>
                      <option value="donate">Crowd funding</option>
                      <option value="research">
                        Researching for social's demands
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 shadow-sm w-full rounded-md p-6 m">
                <h2 className="text-2xl mt-6 font-bold text-[#00a85c]">
                  Project indeed details
                </h2>
                <div className="name w-full mt-4">
                  <label className="font-bold text-lg">
                    Your target money amount:{" "}
                  </label>
                  <input
                    name="goal"
                    onChange={(e) => handleChange(e)}
                    type={"number"}
                    className={`${INPUT_FORMAT} w-full`}
                  />
                </div>
                <div className="name w-full mt-4">
                  <label className="font-bold text-lg">
                    Pick your end date
                  </label>
                  <input
                    name="endTime"
                    onChange={(e) => handleChange(e)}
                    defaultValue={createNewDate()}
                    value={project.date.endTime}
                    min={createNewDate()}
                    type={"date"}
                    className={`${INPUT_FORMAT} w-full`}
                  />
                </div>
                <PrimaryBtn classname={"w-1/2"} callback={handleSubmit}>
                  Submit
                </PrimaryBtn>
              </div>
            </div>

            <div className="col-span-12">
              <h2 className="font-bold text-2xl text-black my-4">
                Enter your full story
              </h2>
              <div className="w-full overflow-hiden">
                <Editor
                  onInit={(evt, editor) => (fullStoryRef.current = editor)}
                  init={EDITOR_SETTING}
                />
              </div>
            </div>
          </div>
        </main>
      </PageContainer>
    </main>
  );
};

export default NewProject;
