import { ReactElement, useState } from "react";
import Image from "next/image";
import type { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";
import { destinations } from "../data.json";

import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

const Page: NextPageWithLayout = () => {
  const [currentDestination, setCurrentDestination] = useState(destinations[0]);

  const handleDestinationChange = (destination) => {
    setCurrentDestination(destination);
  };

  return (
    <div className="text-center">
      <div className="nav-text uppercase text-white">
        <span className="font-bold opacity-50">01</span> Pick your destination
      </div>
      <Image
        src={currentDestination.images.png}
        width={170}
        height={170}
        alt={currentDestination.name}
        className="mx-auto"
      />

      <nav>
        {destinations.map((destination, i) => (
          <a
            key={i}
            className="nav-text uppercase text-white"
            onClick={() => handleDestinationChange(destination)}
          >
            {destination.name}
          </a>
        ))}
      </nav>

      <h1 className="uppercase text-white">{currentDestination.name}</h1>

      <p className="text-white">{currentDestination.description}</p>
      <hr className="border-white" />

      <div className="subheading-2 uppercase text-white">avg. distance</div>
      <div className="subheading-1 uppercase text-white">
        {currentDestination.distance}
      </div>

      <div className="subheading-2 uppercase text-white">est. travel time</div>
      <div className="subheading-1 uppercase text-white">
        {currentDestination.travel}
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
