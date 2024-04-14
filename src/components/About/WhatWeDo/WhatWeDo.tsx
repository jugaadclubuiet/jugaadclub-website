import { f_alata_400 } from "@/styles/fonts";
import React from "react";

const WhatWeDo = () => {
  return (
    <>
      <div className="w-full py-10 flex flex-row items-center justify-start min-h-screen">
        <div className="flex flex-col items-center justify-center gap-10 bg-[#000000b1] py-5 px-8 w-2/3">
          <h1
            className={`text-white ${f_alata_400.className} uppercase my-2 py-4 text-6xl leading-none tracking-wide`}
            style={{
              WebkitTextStrokeWidth: 3,
              WebkitTextStrokeColor: "#000",
            }}
          >
            What we Do
          </h1>
          <p className="text-base text-white font-normal py-4 px-16">
            From designing and building robots to programming and experimenting
            with cutting-edge technologies, Jugaad Robotics Club offers a wide
            range of activities and opportunities for members to dive deep into
            the world of robotics. Whether you're a seasoned expert or a
            complete beginner, there's something for everyone at Jugaad Robotics
            Club.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
