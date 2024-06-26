"use client";

import CrystalCanvas from "@/app/components/canvas/Crystal";
import AnimatedCrawler from "@/app/components/canvas/AnimatedCrawler.jsx";

const Home = () => {
  return (
    <div className={"flex h-full flex-col items-center justify-center"}>
      <div className={" h-[400px] w-[300px] sm:h-[500px] sm:w-[400px]"}>
        <CrystalCanvas />
      </div>
      <AnimatedCrawler className={"-z-10 hidden lg:block"} />
    </div>
  );
};

export default Home;
