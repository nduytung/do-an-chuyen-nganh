import React, { useEffect, useRef, useState } from "react";
import PageContainer from "../../layouts/PageContainer";
import { SectionTitle } from "../Landing";
import Tag from "../../components/ProjectDetail/Tag";
import PrimaryBtn from "../../components/ProjectDetail/PrimaryBtn";
import moment from "moment";
import CreateProjectBg from "../../img/creatprojectbg.webp";
import DefaultBg from "../../img/defaultbg.png";
import { CATE_LIST } from "../../data/categories";
import { Item } from "rc-menu";
import { toast } from "react-toastify";
import { handleApi } from "../../api/handleApi";
import PrimaryInput from "../../components/input/PrimaryInput";
import SelectInput from "../../components/input/SelectInput";
import DateInput from "../../components/input/DateInput";

import PrimaryTextEditor, {
  EDITOR_SETTING,
} from "../../components/input/PrimaryTextEditor";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

export const createNewDate = () => moment(new Date()).format("YYYY-MM-DD");

export const CATEGORY_TYPE = [
  {
    name: "Education",
    value: "Education",
  },
  {
    name: "Medical & heath",
    value: "Medical & heath",
  },
  {
    name: "Fashion",
    value: "Fashion",
  },
  {
    name: "Video & Filming",
    value: "Video & Filming",
  },
  {
    name: "Technologies",
    value: "Technologies",
  },
  {
    name: "Design",
    value: "Design",
  },
];

export const PROJECT_TYPE = [
  { name: "Crowd funding & raising", value: "donate" },
  { name: "Market researching", value: "research" },
];

export const IMAGE_WIDTH = 800;
export const IMAGE_HEIGHT = 500;
export interface IProject {
  projectName: string;
  type: "donate" | "research" | "";
  goal?: number | string;
  researchDetail?: string;
  shortStory: string;
  fullStory: string;
  image: any;
  category:
    | "Education"
    | "Medical & heath"
    | "Fashion"
    | "Video & Filming"
    | "Technologies"
    | "Design"
    | "";
  date: {
    startTime: string | undefined;
    endTime: string | undefined;
  };
}

const NewProject = () => {
  const shortStoryRef = useRef<any>();
  const fullStoryRef = useRef<any>();
  const researchForm = useRef<any>();
  const fileUploadInputRef = useRef<any>();
  const [textEditorErr, setTextEditorErr] = useState(false);
  const [project, setProject] = useState<IProject>({
    projectName: "",
    type: "",
    shortStory: "",
    fullStory: "",
    category: "",
    image: "",
    goal: 0,
    date: {
      startTime: undefined,
      endTime: createNewDate(),
    },
  });

  const [validate, setValidate] = useState(false);
  const [missingField, setMissingField] = useState(false);
  const [imageData, setImageData] = useState<any>("");

  const handleChange = (e: any) => {
    e.target.name !== "endTime"
      ? setProject({ ...project, [e.target.name]: e.target.value })
      : setProject({
          ...project,
          date: { ...project.date, endTime: e.target.value },
        });
  };

  useEffect(() => {
    setValidate(false);
    setMissingField(false);
  }, [project]);

  const handleSubmit = async () => {
    setValidate(true);
    if (missingField) return;

    const shortStoryContent = shortStoryRef.current.getContent();
    const fullStoryContent = fullStoryRef.current.getContent();

    if (shortStoryContent === "" || fullStoryContent === "") {
      setTextEditorErr(true);
      return;
    }
    //upload image
    const imgResponse = await handleUploadImage(imageData);
    console.log(imgResponse);

    if (imgResponse.status !== 200) return;

    if (project.type === "donate") {
      const data = await handleApi({
        method: "post",
        payload: {
          ...project,
          shortStory: shortStoryContent,
          fullStory: fullStoryContent,
          researchDetail: "",
          image: imgResponse.data.props.imageId,
          date: { ...project.date, startTime: createNewDate() },
        },
        endpoint: "project/create",
      });
    } else if (project.type === "research") {
      const researchContent = researchForm.current.getContent();
      if (researchContent === "") {
        setTextEditorErr(true);
        return;
      }
      await handleApi({
        method: "post",
        payload: {
          ...project,
          shortStory: shortStoryContent,
          fullStory: fullStoryContent,
          goal: 0,
          image: imgResponse.data.props.imageId,
          researchDetail: researchContent,
          date: { ...project.date, startTime: createNewDate() },
        },
        endpoint: "project/create",
      });
    }
    console.log(project);
  };

  const handleUploadImage = async (image: any) => {
    return await handleApi({
      method: "post",
      payload: { image: imageData },
      endpoint: "image/create",
    });
  };

  const handleFileSelect = (e: any) => {
    const data = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(data);
    console.log(URL.createObjectURL(data));
    reader.onloadend = function () {
      const base64data = reader.result;
      setProject({ ...project, image: base64data });
      setImageData(base64data);
    };
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
              <img
                src={(project.image !== "" && project.image) || DefaultBg}
                id="imgContainer"
                className="bg-gray-300 h-72 w-full"
                onClick={() => fileUploadInputRef.current.click()}
              />
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                name=""
                id=""
                className="hidden"
                onChange={handleFileSelect}
                ref={fileUploadInputRef}
              />
              <div>
                <h2 className="font-bold text-2xl text-black my-4">
                  Enter your short story
                </h2>
                <div
                  className={`${
                    textEditorErr ? "border border-red-500" : ""
                  } w-full overflow-hidden`}
                >
                  <Editor
                    onInit={(evt, editor) => (shortStoryRef.current = editor)}
                    init={EDITOR_SETTING}
                  />
                </div>
                {textEditorErr && (
                  <p className="text-base font-light text-red-500">
                    {" "}
                    This field is required
                  </p>
                )}
              </div>
            </div>
            <div className="md:col-span-6 flex flex-col items-start gap-10">
              <div className="border border-gray-200 shadow-sm w-full p-6 rounded-md">
                <div className="name w-full">
                  <label className="font-bold text-lg">
                    Enter your project name
                  </label>
                  <PrimaryInput
                    inputName="projectName"
                    handleChange={handleChange}
                    type="text"
                    classname="w-full"
                    value={project.projectName}
                    setError={setMissingField}
                    error={
                      project.projectName === "" && validate === true
                        ? true
                        : false
                    }
                  />
                </div>

                <div className="flex gap-3 justify-between items-center">
                  <div className="category flex-1 w-full">
                    <label className="font-bold text-lg">
                      Choose your category type
                    </label>
                    <SelectInput
                      inputName="category"
                      setError={setMissingField}
                      handleChange={handleChange}
                      error={
                        project.category === "" && validate === true
                          ? true
                          : false
                      }
                      disabledPlaceholder="Choose your category"
                      valueList={CATEGORY_TYPE}
                      value={project.category}
                    />
                  </div>
                  <div className="category flex-1 w-full">
                    <h3 className="font-bold text-lg">
                      Choose your project type
                    </h3>

                    <SelectInput
                      inputName="type"
                      setError={setMissingField}
                      handleChange={handleChange}
                      error={
                        project.type === "" && validate === true ? true : false
                      }
                      disabledPlaceholder="Choose what you wanna do with your project"
                      valueList={PROJECT_TYPE}
                      value={project.type}
                    />
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 shadow-sm w-full rounded-md p-6 m">
                <h2 className="text-2xl mt-6 font-bold text-[#00a85c]">
                  Project indeed details
                </h2>
                {project.type === "donate" && (
                  <div className="name w-full mt-4">
                    <label className="font-bold text-lg">
                      Your target money amount:{" "}
                    </label>
                    <div className="flex items-center">
                      <PrimaryInput
                        inputName="goal"
                        value={project.goal}
                        setError={setMissingField}
                        handleChange={handleChange}
                        type="number"
                        error={
                          (project.goal == 0 || project.goal === "") &&
                          validate === true &&
                          project.type === "donate"
                            ? true
                            : false
                        }
                      />
                      <p className="ml-5">{"   "},000 VND </p>
                    </div>
                  </div>
                )}
                {project.type === "research" && (
                  <div className="name w-full mt-4">
                    <label className="font-bold text-lg">
                      What you want others comment about your project:
                    </label>

                    <div
                      className={`${
                        textEditorErr ? "border border-red-500" : ""
                      } w-full overflow-hidden`}
                    >
                      <Editor
                        onInit={(evt, editor) =>
                          (researchForm.current = editor)
                        }
                        init={EDITOR_SETTING}
                      />
                    </div>
                    {textEditorErr && (
                      <p className="text-base font-light text-red-500">
                        {" "}
                        This field is required
                      </p>
                    )}
                  </div>
                )}
                <div className="name w-full mt-4">
                  <label className="font-bold text-lg">
                    Pick your end date
                  </label>

                  <DateInput
                    inputName="endTime"
                    handleChange={handleChange}
                    setError={setMissingField}
                    value={project.date.endTime}
                    error={
                      project.date.endTime === "" && validate === true
                        ? true
                        : false
                    }
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

              <div
                className={`${
                  textEditorErr ? "border border-red-500" : ""
                } w-full overflow-hidden`}
              >
                <Editor
                  onInit={(evt, editor) => (fullStoryRef.current = editor)}
                  init={EDITOR_SETTING}
                />
              </div>
              {textEditorErr && (
                <p className="text-base font-light text-red-500">
                  {" "}
                  This field is required
                </p>
              )}
            </div>
          </div>
        </main>
      </PageContainer>
    </main>
  );
};

export default NewProject;
