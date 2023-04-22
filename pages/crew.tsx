import { ReactElement, useState } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import Link from "next/link";
import Image from "next/image";
import { crew } from "../data.json";

const Page: NextPageWithLayout = () => {
  const [currentCrew, setCurrentCrew] = useState(crew[0]);

  const handleCrewChange = (crewMember) => {
    setCurrentCrew(crewMember);
  };

  return (
    <div className="">
      <div className="nav-text text-center uppercase text-white md:pl-10 md:text-left md:text-[20px] md:tracking-[3.38px] lg:my-12 lg:pl-40 lg:text-[28px] lg:tracking-[4.72px]">
        <span className="font-bold opacity-50 lg:mr-4">02</span> Meet your crew
      </div>

      <div className="relative mx-auto my-8 h-56 w-full">
        <Image
          src={currentCrew.images.png}
          alt={currentCrew.name}
          className="object-contain"
          fill
        />
      </div>

      <hr />

      <div className="my-8 flex justify-center space-x-4">
        {crew.map((crewMember, i) => (
          <div
            key={i}
            className={`h-[10px] w-[10px] cursor-pointer rounded-full bg-white ${
              currentCrew.name !== crewMember.name ? "opacity-20" : ""
            }`}
            onClick={() => handleCrewChange(crewMember)}
          ></div>
        ))}
      </div>

      <div>
        <h4 className="text-center text-[16px] uppercase text-white opacity-50">
          {currentCrew.role}
        </h4>

        <h3 className="text-center text-[24px] uppercase text-white">
          {currentCrew.name}
        </h3>

        <p className="px-6 text-center text-[15px] text-light-blue">
          {currentCrew.bio}
        </p>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
