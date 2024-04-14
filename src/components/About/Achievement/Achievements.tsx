import React from "react";
import Image from "next/image";
import { ImageType } from "@/types/Image";
import { f_alata_400 } from "@/styles/fonts";

const Achievements = () => {
  const Images: ImageType[] = [
    { src: "/team/achievements.jpg", alt: "1", title: "Achievement 1" },
    { src: "/team/achievements.jpg", alt: "2", title: "Achievement 2" },
    { src: "/team/achievements.jpg", alt: "3", title: "Achievement 3" },
  ];

  return (
    <>
      <div className="w-full flex flex-col items-center py-5 px-4">
        <h1
          className={`capitalize text-white my-4 mx-1 py-2 text-6xl leading-none tracking-normal ${f_alata_400.className}`}
          style={{
            WebkitTextStrokeWidth: 3,
            WebkitTextStrokeColor: "#000",
          }}
        >
          Achievements
        </h1>
        <div className="flex flex-row items-start justify-evenly w-full my-2">
          {Images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={250}
              height={400}
              draggable={false}
              className="border-2 border-solid border-white rounded-lg w-80 h-[380px]"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievements;
