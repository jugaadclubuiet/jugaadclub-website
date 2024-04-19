import React from "react";
import { f_inter_700 } from "@/styles/fonts";

type Props = {};

const Masthead = (props: Props) => {
  return (
    <>
      <div className="w-full min-h-screen flex items-center flex-col mt-32 sm:pr-[48px] bg-[#ffffff23]">
        <div className="w-full px-3 py-8 bg-[#ffffff8a] flex items-center justify-center">
          <h1
            className={`uppercase text-4xl text-black ${f_inter_700.className} font-bold`}
            style={{
              WebkitTextStrokeWidth: 1,
              WebkitTextStrokeColor: "#C4B567",
            }}
          >
            MEET THE TEAM
          </h1>
        </div>
      </div>
    </>
  );
};

export default Masthead;
