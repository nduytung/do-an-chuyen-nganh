import React, { lazy } from "react";
import PrimaryBtn from "../components/ProjectDetail/PrimaryBtn";
import WhiteBtn from "../components/WhiteBtn";
import PageContainer from "../layouts/PageContainer";
import { BsBook } from "react-icons/bs";
import Category from "../components/Category";
import ProjectCard from "../components/ProjectCard";
import {
  AiFillAlipayCircle,
  AiOutlineVideoCamera,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import {
  MdOutlineCastForEducation,
  MdOutlineDesignServices,
  MdVolunteerActivism,
} from "react-icons/md";
import { FaFileMedical, FaAward, FaUserFriends } from "react-icons/fa";
import BackDrop from "../img/backdrop.png";
import WhiteBgBtn from "../components/ProjectDetail/WhiteBgBtn";
import { GiClothes } from "react-icons/gi";
import { GrDocumentVideo } from "react-icons/gr";
import { BiCodeAlt } from "react-icons/bi";
import AdvisingProjectCard from "../components/AdvisingProjectCard";
import CTABg from "../img/cta.webp";

export const CATEGORY: Array<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = [
  {
    icon: <MdOutlineCastForEducation />,
    title: "Education",
    description: "School, college and univsersity",
  },
  {
    icon: <FaFileMedical />,
    title: "Medical & heath",
    description: "For medical and health purposes",
  },
  {
    icon: <GiClothes />,
    title: "Fashion",
    description: "Fashion and clothing purposes",
  },
  {
    icon: <AiOutlineVideoCamera />,
    title: "Video & Filming",
    description: "Support video & filming methods",
  },
  {
    icon: <BiCodeAlt />,
    title: "Technologies",
    description: "For technology purposes",
  },
  {
    icon: <MdOutlineDesignServices />,
    title: "Design",
    description: "House design & architecture",
  },
];

export const SectionTitle = ({
  subHeader,
  header,
  classname,
}: {
  subHeader: string;
  header: string;
  classname?: string;
}) => {
  return (
    <article
      className={`${classname} justify-between items-center mb-10 mx-auto`}
    >
      <h3 className="font-bold text-[#00a85c] text-base mb-4 uppercase">
        {subHeader}
      </h3>
      <h1 className=" font-bold text-4xl capitalize">{header}</h1>
    </article>
  );
};

const CTAItems = ({
  icon,
  number,
  title,
}: {
  icon: React.ReactElement;
  number: number;
  title: string;
}) => {
  return (
    <article className="flex mt-6 md:mt-0 mx-auto items-center gap-10 xl:gap-4 text-white">
      <p className="text-6xl font-bold">{icon}</p>
      <div>
        <p className="text-4xl font-extrabold">{number} + </p>
        <p className="text-lg font-semibold">{title}</p>
      </div>
    </article>
  );
};
const Landing = () => {
  return (
    <main>
      <section className="py-20 bg-[#dff7f1] w-full">
        <PageContainer classname="container grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center gap-8 items-start h-full">
            <h1 className="font-bold text-5xl lg:text-7xl xl:text-8xl">
              We help innovation in Tech
            </h1>
            <p className="text-xl lg:text-2xl border-l-4 border-green-600 lg:w-3/4 pl-4">
              Funden is changing the way people and companies work
            </p>
            <PrimaryBtn callback={() => {}}>Start A Project</PrimaryBtn>
          </div>
          <div className="col-span-12 md:col-span-6">
            <img src={BackDrop} alt="backdrop" className="z-10" />
          </div>
        </PageContainer>
      </section>
      <PageContainer>
        <section className="z-20 py-8 md:py-10 xl:py-16 -mt-16 lg:-mt-20 px-6 lg:px-8 bg-[#00a85c] md:flex justify-between items-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-white font-semibold">
            Ready to raise fund for ideas?
          </h2>
          <WhiteBgBtn classname="mt-6 lg:mt-0" callback={() => {}}>
            read more
          </WhiteBgBtn>
        </section>

        {/* categories */}
        <section className="my-16">
          <div className="lg:flex justify-between items-end">
            <SectionTitle
              classname="mx-0"
              header="popular categories"
              subHeader="what we do"
            />
            <PrimaryBtn classname="lg:-mt-10 mb-10" callback={() => {}}>
              Explore projects
            </PrimaryBtn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORY.map((item) => {
              return (
                <Category
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  classname="col-span-1"
                />
              );
            })}
          </div>
        </section>

        <section className="my-16">
          <SectionTitle
            subHeader="what we do"
            header="projects need your advices!"
            classname="text-center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <AdvisingProjectCard
              cate="Design&Tech"
              title="Self Driving Robot for Target Shooting Game"
              description="this is a testing description"
              dayLeft={10}
            />
            <AdvisingProjectCard
              cate="Design&Tech"
              title="Self Driving Robot for Target Shooting Game"
              description="this is a testing description"
              dayLeft={10}
            />
          </div>
        </section>

        {/* explore projects */}
        <section className="my-16">
          <SectionTitle
            subHeader="what we do"
            header="popular projects"
            classname="text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <ProjectCard
              cate="Design&Tech"
              title="Self Driving Robot for Target Shooting Game"
              raised={4500}
              goal={8000}
              dayLeft={10}
            />{" "}
            <ProjectCard
              cate="Design&Tech"
              title="Self Driving Robot for Target Shooting Game"
              raised={4500}
              goal={8000}
              dayLeft={10}
            />{" "}
            <ProjectCard
              cate="Design&Tech"
              title="Self Driving Robot for Target Shooting Game"
              raised={4500}
              goal={8000}
              dayLeft={10}
            />{" "}
            <ProjectCard
              cate="Design&Tech"
              title="Self Driving Robot for Target Shooting Game"
              raised={4500}
              goal={8000}
              dayLeft={10}
            />{" "}
            <ProjectCard
              cate="Design&Tech"
              title="Self Driving Robot for Target Shooting Game"
              raised={4500}
              goal={8000}
              dayLeft={10}
            />
          </div>
        </section>

        {/* cta */}
        <section className="bg-[#00a85c] py-10 xl:py-16 px-10 grid-cols-1 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          <CTAItems
            title="Awards Winning"
            number={9436}
            icon={<AiOutlineFundProjectionScreen />}
          />
          <CTAItems title="testing titl1" number={2100} icon={<FaAward />} />
          <CTAItems
            title="Global Partners"
            number={3510}
            icon={<FaUserFriends />}
          />
          <CTAItems
            title="Volunteers"
            number={5000}
            icon={<MdVolunteerActivism />}
          />
        </section>

        {/* cta funding & support */}
        <section className="my-16 bg-gray-600 p-16 flex-row md:flex justify-between text-white items-center">
          <div className="w-full md:w-2/5 text-center mb-10 md:mb-0">
            <h2 className="font-extrabold text-3xl lg:text-5xl">
              Get funding & financial support
            </h2>
            <hr className="border-white my-3" />
            <p className="font-semibold text-base my-2">
              Support your project financially by using community's fund &
              withdrawals
            </p>
            <PrimaryBtn classname="mx-auto mt-8" callback={() => {}}>
              Get more
            </PrimaryBtn>
          </div>
          <hr className="bg-white h-56 w-1  md:block hidden" />
          <div className="text-center w-full md:w-2/5">
            <h2 className="font-extrabold text-3xl lg:text-5xl">
              Find our about market's insights
            </h2>
            <hr className="border-white my-3" />

            <p className="font-semibold text-base my-2">
              Find out what's your client's or market demands, especially when
              you are building a start-up
            </p>
            <PrimaryBtn classname="mx-auto mt-8" callback={() => {}}>
              Get more
            </PrimaryBtn>
          </div>
        </section>
      </PageContainer>

      <section className="bg-[#eff5f4]">
        <PageContainer classname="md:flex justify-between items-center py-20">
          <div className="flex-1">
            <SectionTitle subHeader="join to us" header="not a member yet?" />
            <p className="text-base lg:text-lg text-gray-400 mb-6">
              Join us! Our members can access savings of up to 50% and earn Trip
              Coins while booking.{" "}
            </p>
            <div className="flex justify-between md:justify-start items-center gap-8">
              <PrimaryBtn callback={() => {}}>Sign in</PrimaryBtn>
              <WhiteBtn callback={() => {}}>Register</WhiteBtn>
            </div>
          </div>

          <img
            src={CTABg}
            alt="cta"
            height={500}
            width={300}
            className="mx-auto block mt-20 lg:mt-0"
          />
        </PageContainer>
      </section>
    </main>
  );
};

export default Landing;
