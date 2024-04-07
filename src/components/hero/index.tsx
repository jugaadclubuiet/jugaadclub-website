import React from "react";
import {
  Info,
  MastHead,
  Worshops,
  Projects,
  Sidebar,
  Footer,
} from "@/components/ComponentExporter";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section
        className="w-full min-h-screen bg-black flex flex-row-reverse items-start justify-start"
        style={{
          background: "url('/bgImg.png')",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Sidebar */}
        <Sidebar />
        <div
          className="w-full h-screen overflow-y-auto bg-transparent text-white"
          id="scrollable-container-parallax"
        >
          {/* Header */}
          <div className="w-full bg-transparent h-screen">
            <MastHead />
          </div>

          {/* Main */}
          <div className="w-full min-h-screen bg-transparent">
            {/* Info's */}
            <Info />
            {/* Carousels */}
            <Worshops />
            <Projects />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
