import { ReactElement, useState } from "react";
import Image from "next/image";
import type { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";
import { destinations } from "../data.json";

const Page: NextPageWithLayout = () => {
  const [currentDestination, setCurrentDestination] = useState(destinations[0]);

  const handleDestinationChange = (destination) => {
    setCurrentDestination(destination);
  };

  return (
    <div className="">
      <div className="nav-text text-center uppercase text-white md:pl-10 md:text-left md:text-[20px] md:tracking-[3.38px] lg:my-12 lg:pl-40 lg:text-[28px] lg:tracking-[4.72px]">
        <span className="font-bold opacity-50 lg:mr-4">01</span> Pick your
        destination
      </div>

      <div className="lg:flex lg:items-center lg:justify-center lg:space-x-56">
        <div className="relative mx-auto my-8 h-[170px] w-[170px] md:h-[300px] md:w-[300px] lg:mx-0 lg:h-[445px] lg:w-[445px]">
          <Image
            src={currentDestination.images.png}
            alt={currentDestination.name}
            fill
          />
        </div>

        <div className="lg:w-[450px]">
          <nav className="flex justify-center space-x-6 lg:justify-start lg:space-x-10">
            {destinations.map((destination, i) => (
              <a
                key={i}
                className={`nav-text cursor-pointer pb-2 uppercase text-light-blue ${
                  currentDestination.name === destination.name
                    ? "border-b-2 border-white text-white"
                    : ""
                }`}
                onClick={() => handleDestinationChange(destination)}
              >
                {destination.name}
              </a>
            ))}
          </nav>

          <h2 className="text-center uppercase text-white sm:max-md:text-[56px] lg:text-left">
            {currentDestination.name}
          </h2>

          <p className="px-6 text-center text-[15px] text-light-blue md:px-32 md:text-[16px] lg:px-0 lg:text-left lg:text-[18px]">
            {currentDestination.description}
          </p>

          <hr className="mx-6 my-8 border-[#383B4B] md:mx-24 lg:mx-0 lg:mb-7 lg:mt-14" />

          <div className="md:flex md:items-center md:justify-center md:space-x-28 lg:justify-start">
            <div>
              <div className="subheading-2 text-center uppercase text-light-blue lg:text-left">
                avg. distance
              </div>
              <div className="subheading-1 text-center uppercase text-white lg:text-left">
                {currentDestination.distance}
              </div>
            </div>

            <div>
              <div className="subheading-2 mt-6 text-center uppercase text-light-blue md:mt-0 lg:text-left">
                est. travel time
              </div>
              <div className="subheading-1 text-center uppercase text-white lg:text-left">
                {currentDestination.travel}
              </div>
            </div>
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
