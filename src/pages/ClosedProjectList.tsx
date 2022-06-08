import React, { useEffect, useState } from "react";
import { handleApi } from "../api/handleApi";
import ProjectCard, { calcDateRange } from "../components/ProjectCard";
import { SectionTitle } from "./Landing";

const ClosedProjectList = () => {
  const [projects, setProjects] = useState<any>(null);
  useEffect(() => {
    const getOutdatedProjects = async () => {
      const data = await handleApi({
        method: "get",
        endpoint: `project/all`,
      });

      const filteredData = await data?.data?.props.filter((item: any) => {
        return calcDateRange(item?.date.startTime, item?.date.endTime) < 0;
      });

      await setProjects(filteredData);
      console.log(filteredData);
    };

    getOutdatedProjects();
  }, []);
  return (
    <main className="my-36">
      <SectionTitle
        subHeader="Ended"
        header="Check out our ended projects"
        classname="text-center"
      />
      {projects?.length === 0 ? (
        <p className="text-center w-5/6 text-lg font-light mx-auto">
          It looks like it doesnt have any ended project here :( please comeback
          later{" "}
        </p>
      ) : (
        projects?.map((project: any) => (
          <ProjectCard
            cate={project?.category}
            title={project?.projectName}
            raised={project?.raised}
            goal={project?.goal}
            startTime={project?.date?.startTime}
            endTime={project?.date?.endTime}
            background={project?.image}
            allowDelete={true}
            projectId={project?._id}
            handleDelete={() => {}}
          />
        ))
      )}
    </main>
  );
};

export default ClosedProjectList;
