import { ReactElement, SetStateAction, useState } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import { default as data } from "../data.json";
import useCheckScreenType from "@/hooks/useCheckScreenType";

const Page: NextPageWithLayout = () => {
  const screenType = useCheckScreenType();
  const [currentTechnology, setCurrentTechnology] = useState(
    data.technology[0]
  );

  const handleTechnologyChange = (
    technology: SetStateAction<{
      name: string;
      images: { portrait: string; landscape: string };
      description: string;
    }>
  ) => {
    setCurrentTechnology(technology);
  };

  return (
    <div>
      <div className="nav-text mb-4 text-center uppercase text-white md:mb-12 md:pl-10 md:text-left md:text-[20px] md:tracking-[3.38px] lg:mt-8 lg:pl-40 lg:text-[28px] lg:tracking-[4.72px]">
        <span className="font-bold opacity-50 lg:mr-4">03</span> Space Launch
        101
      </div>

      <div className="lg:flex lg:items-center lg:justify-between lg:pl-40">
        <div className="relative h-44 w-full md:h-[310px] lg:order-3 lg:h-[527px] lg:w-[515px]">
          <Image
            src={
              screenType === "desktop"
                ? currentTechnology.images.portrait
                : currentTechnology.images.landscape
            }
            alt={currentTechnology.name}
            className="object-contain"
            fill
          />
        </div>

        <div className="my-8 flex justify-center space-x-4 lg:order-1 lg:m-0 lg:flex-col lg:items-center lg:justify-start lg:space-x-0 lg:space-y-8">
          {data.technology.map((technology, i) => (
            <div
              key={i}
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full font-bellefair hover:border-white md:h-[60px] md:w-[60px] md:text-[24px] lg:h-[80px] lg:w-[80px] ${
                currentTechnology.name === technology.name
                  ? "bg-white"
                  : "border border-white border-opacity-25 bg-dark-blue text-white"
              }`}
              onClick={() => handleTechnologyChange(technology)}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <div className="lg:order-2">
          <div className="subheading-2 md:tracking[2.7px] text-center uppercase text-light-blue md:text-[16px] lg:text-left">
            The Terminology ...
          </div>
          <h3 className="my-2 text-center uppercase text-white sm:max-md:text-[24px] md:max-lg:text-[40px] lg:text-left">
            {currentTechnology.name}
          </h3>
          <p className="px-8 pb-8 text-center leading-6 text-light-blue sm:max-md:text-[15px] md:px-40 md:leading-7 md:max-lg:text-[16px] lg:w-[475px] lg:px-0 lg:text-left lg:leading-8">
            {currentTechnology.description}
          </p>
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
