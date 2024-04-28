import BackgroundGradient from "@/components/About/info/Info";
import React from "react";

type Props = {};

const Masthead = (props: Props) => {
  
  return (
    <>
      <div
        className="w-full h-[320px] sm:hidden flex justify-center py-5 px-9 relative"
        style={{
          background: "url('/contactBG.png') lightgray 50% / cover no-repeat", 
        }}
      >
        <h1 className="uppercase font-black text-black text-[2rem] sm:text-5xl md:text-6xl p-1 text-center absolute w-full bottom-4">
          CONTACT JUGAAD
        </h1>
      </div>
      <div
        className="w-full min-h-screen hidden sm:flex justify-center py-5 px-9 relative"
        style={{
          background: "url('/contactBG.png') lightgray 50% / cover no-repeat", 
        }}
      >
        <h1 className="uppercase font-black text-black text-4xl sm:text-5xl md:text-6xl p-1 text-center absolute w-full bottom-8">
          CONTACT JUGAAD
        </h1>
      </div>
    </>
  );
};

export default Masthead;
