import { Editor } from "@tinymce/tinymce-react";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { handleApi } from "../../api/handleApi";
import PrimaryInput from "../../components/input/PrimaryInput";
import { EDITOR_SETTING } from "../../components/input/PrimaryTextEditor";
import PrimaryBtn from "../../components/ProjectDetail/PrimaryBtn";
import PageContainer from "../../layouts/PageContainer";
import { BASE_URL } from "../../routes/baseURL";
import { SectionTitle } from "../Landing";

const UpdatePath = () => {
  const [updateContent, setUpdateContent] = useState({
    title: "",
    content: "",
  });
  const [projectInfo, setProjectInfo] = useState<any>({});
  const [error, setError] = useState({
    titleError: false,
    contentError: false,
  });

  const contentRef = useRef<any>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProjectDetail = async () => {
      const data = await handleApi({
        method: "get",
        endpoint: `project/detail/${id}`,
      });

      if (data) {
        setProjectInfo(data?.data?.props);
      }
    };

    getProjectDetail();
  }, []);

  const handleSubmitProgress = async () => {
    const content = await contentRef.current.getContent();
    setUpdateContent({ ...updateContent, content: content });

    //calling apis
    const data = await handleApi({
      method: "put",
      payload: {
        ...updateContent,
        content: content,
        projectId: projectInfo._id,
        date: moment(new Date()).format("YYYY-MM-DD"),
      },
      endpoint: "project/update/progress",
      disableNoti: false,
    });
    if (data) {
      navigate(BASE_URL.LANDING);
    }
  };

  return (
    <PageContainer classname="my-36">
      <SectionTitle
        subHeader="Want to update your project? Let people of your network know about it!"
        header={`update projects: ${projectInfo && projectInfo?.projectName}`}
        classname="text-center"
      />
      <div>
        <label className="text-lg font-semibold my-2">Update title</label>
        <PrimaryInput
          inputName="title"
          handleChange={(e: any) =>
            setUpdateContent({ ...updateContent, title: e.target.value })
          }
          type="text"
          value={updateContent.title}
          error={error.titleError}
          setError={setError}
          classname="w-full"
        />
        <label className="text-lg font-semibold my-2">
          Describe your update in details
        </label>
        <Editor
          onInit={(evt, editor) => (contentRef.current = editor)}
          init={EDITOR_SETTING}
        />
      </div>
      <div className="flex items-center justify-end my-10 gap-10">
        <Link to={BASE_URL.LANDING}>
          <span className="text-lg text-green-500 ">Cancel</span>{" "}
        </Link>
        <PrimaryBtn callback={async () => await handleSubmitProgress()}>
          Submit
        </PrimaryBtn>
      </div>
    </PageContainer>
  );
};

export default UpdatePath;
