import React from "react";
import PrimaryBtn from "../components/ProjectDetail/PrimaryBtn";
import WhiteBtn from "../components/WhiteBtn";
import PageContainer from "../layouts/PageContainer";
import { BsBook } from "react-icons/bs";
import Category from "../components/Category";
import ProjectCard from "../components/ProjectCard";
import { AiFillAlipayCircle } from "react-icons/ai";

const SectionTitle = ({
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
    <article className="flex items-center gap-4 text-white">
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
      <section className="h-screen bg-gray-300 w-full">
        <PageContainer classname="container grid grid-cols-12 h-full">
          <div className="col-span-6 flex flex-col justify-center gap-8 items-start h-full">
            <h1 className="font-bold text-7xl">
              We helps surface innovation in Tech
            </h1>
            <p className="text-2xl border-l-4 border-green-600 w-3/4 pl-4">
              Funden is changing the way people and companies work
            </p>
            <PrimaryBtn callback={() => {}}>Start A Project</PrimaryBtn>
          </div>
        </PageContainer>
      </section>
      <PageContainer>
        <section className="h-48 -mt-24 p-8 bg-[#00a85c] flex justify-between items-center">
          <h2 className="text-5xl text-white font-semibold">
            Ready to raise fund for ideas?
          </h2>
          <WhiteBtn callback={() => {}}>read more</WhiteBtn>
        </section>

        {/* categories */}
        <section className="my-16">
          <div className="flex justify-between items-end">
            <SectionTitle header="popular categories" subHeader="what we do" />
            <PrimaryBtn classname="-mt-10 mb-10" callback={() => {}}>
              Explore projects
            </PrimaryBtn>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <Category
              title="testing 1"
              description="test dsc 01 jabsjdbas"
              icon={<BsBook className="text-6xl text-[#00a85c]" />}
              classname="col-span-1"
            />
            <Category
              title="testing 1"
              description="test dsc 01 jabsjdbas"
              icon={<BsBook />}
              classname="col-span-1"
            />
            <Category
              title="testing 1"
              description="test dsc 01 jabsjdbas"
              icon={<BsBook />}
              classname="col-span-1"
            />
            <Category
              title="testing 1"
              description="test dsc 01 jabsjdbas"
              icon={<BsBook />}
              classname="col-span-1"
            />
            <Category
              title="testing 1"
              description="test dsc 01 jabsjdbas"
              icon={<BsBook />}
              classname="col-span-1"
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

          <div className="grid grid-cols-4 gap-8">
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
        <section className="bg-[#00a85c] py-16 px-10 grid grid-cols-4 gap-8">
          <CTAItems
            title="testing titl1"
            number={5000}
            icon={<AiFillAlipayCircle />}
          />
          <CTAItems
            title="testing titl1"
            number={5000}
            icon={<AiFillAlipayCircle />}
          />
          <CTAItems
            title="testing titl1"
            number={5000}
            icon={<AiFillAlipayCircle />}
          />
          <CTAItems
            title="testing titl1"
            number={5000}
            icon={<AiFillAlipayCircle />}
          />
        </section>

        {/* cta funding & support */}
        <section className="my-16 bg-gray-600 p-16 flex justify-between text-white items-center">
          <div className="w-2/5 text-center">
            <h2 className="font-extrabold text-5xl">Get funding & support</h2>
            <p className="font-semibold text-base">
              Sed perspiciatis unde omniste natus error sit voluptatem
              accusantium doloremque laudan totamrem aperiam eaque quae abille
            </p>
            <PrimaryBtn classname="mx-auto mt-8" callback={() => {}}>
              Get more
            </PrimaryBtn>
          </div>
          <hr className="bg-white h-56 w-1" />
          <div className="text-center w-2/5">
            <h2 className="font-extrabold text-5xl">Get funding & support</h2>
            <p className="font-semibold text-base">
              Sed perspiciatis unde omniste natus error sit voluptatem
              accusantium doloremque laudan totamrem aperiam eaque quae abille
            </p>
            <PrimaryBtn classname="mx-auto mt-8" callback={() => {}}>
              Get more
            </PrimaryBtn>
          </div>
        </section>
      </PageContainer>

      <section className="bg-[#eff5f4] py-24">
        <PageContainer classname="grid grid-cols-2">
          <div>
            <SectionTitle subHeader="join to us" header="not a member yet?" />
            <p className="text-base text-gray-400 mb-6">
              Join us! Our members can access savings of up to 50% and earn Trip
              Coins while booking.{" "}
            </p>
            <div className="flex justify-start items-center gap-8">
              <PrimaryBtn callback={() => {}}>Sign in</PrimaryBtn>
              <WhiteBtn callback={() => {}}>Register</WhiteBtn>
            </div>
          </div>
        </PageContainer>
      </section>
    </main>
  );
};

export default Landing;
