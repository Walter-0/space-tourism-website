import { ReactElement, useState } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import { default as data } from "../data.json";

const Page: NextPageWithLayout = () => {
  const [currentCrew, setCurrentCrew] = useState(data.crew[0]);

  const handleCrewChange = (crewMember) => {
    setCurrentCrew(crewMember);
  };

  return (
    <div>
      <div className="nav-text text-center uppercase text-white md:pl-10 md:text-left md:text-[20px] md:tracking-[3.38px] lg:-mb-10 lg:mt-8 lg:pl-40 lg:text-[28px] lg:tracking-[4.72px]">
        <span className="font-bold opacity-50 lg:mr-4">02</span> Meet your crew
      </div>

      <div className="md:mt-16 md:flex md:flex-col lg:mt-0 lg:flex-row lg:items-end lg:justify-evenly">
        <div className="relative mx-auto mt-8 h-56 w-full md:order-3 md:h-[572px] lg:m-0 lg:h-[702px] lg:w-[568px]">
          <Image
            src={currentCrew.images.png}
            alt={currentCrew.name}
            className="object-contain"
            fill
          />
        </div>

        <hr className="mx-6 border-white opacity-30 md:hidden" />

        <div className="md:flex md:flex-col lg:mb-24 lg:w-[488px] lg:flex-col">
          <div className="my-8 flex justify-center space-x-4 md:order-2 lg:mb-0 lg:mt-32 lg:justify-start lg:space-x-8">
            {data.crew.map((crewMember, i) => (
              <div
                key={i}
                className={`h-[10px] w-[10px] cursor-pointer rounded-full bg-white hover:opacity-50 lg:h-[15px] lg:w-[15px] ${
                  currentCrew.name !== crewMember.name ? "opacity-20" : ""
                }`}
                onClick={() => handleCrewChange(crewMember)}
              ></div>
            ))}
          </div>

          <div className="md:order-1">
            <h4 className="text-center uppercase text-white opacity-50 sm:max-md:text-[16px] md:max-lg:text-[24px] lg:text-left">
              {currentCrew.role}
            </h4>
            <h3 className="text-center uppercase text-white sm:max-md:text-[24px] md:max-lg:text-[40px] lg:text-left">
              {currentCrew.name}
            </h3>
            <p className="md:max-lg::text-[16px] px-6 text-center text-light-blue sm:max-md:text-[15px] md:px-40 lg:px-0 lg:pr-8 lg:text-left lg:leading-8">
              {currentCrew.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
