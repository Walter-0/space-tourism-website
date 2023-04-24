import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  return (
    <div className="text-center lg:mt-40 lg:flex lg:flex-row lg:items-end lg:justify-around lg:text-left">
      <div className="flex h-[276px] flex-col justify-between md:h-[334px] lg:h-auto lg:w-[450px]">
        <h5 className="nav-text mt-6 uppercase text-light-blue md:mt-20 md:text-[20px] lg:text-[28px] lg:tracking-[4.72px]">
          So, you want to travel to
        </h5>

        <h1 className="uppercase text-white">space</h1>

        <p className="px-6 text-light-blue sm:max-md:text-[15px] md:px-40 md:leading-7 md:max-lg:text-[16px] lg:p-0 lg:leading-8">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>

      <Link href="/destination" legacyBehavior>
        <a className="relative mt-20 inline-flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white font-bellefair text-[20px] uppercase tracking-[1.25px] text-black md:mt-60 md:h-[242px] md:w-[242px] md:text-[32px] lg:z-10 lg:mt-0 lg:before:absolute lg:before:-z-10 lg:before:block lg:before:h-[450px] lg:before:w-[450px] lg:before:rounded-full lg:hover:before:bg-[#24262F]">
          <span className="inline-flex items-center justify-center rounded-full bg-white lg:h-[242px] lg:w-[242px]">
            explore
          </span>
        </a>
      </Link>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
