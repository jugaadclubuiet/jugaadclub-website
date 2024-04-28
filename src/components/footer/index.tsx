import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterLinks from "./footerLinks";
import { f_inter_800, f_inter_400, f_inika_700 } from "@/styles/fonts";
import Avatars from "./avatar/designers";

type Props = {};

const footer = (props: Props) => {
  return (
    <>
      <footer className="w-full pt-1 pb-60 md:pb-14 bg-black mt-10">
        <div className="w-full flex flex-col text-white lg:flex-row items-center lg:items-start lg:justify-between justify-evenly px-4 md:px-16 py-6">
          <div className="flex flex-col items-center justify-center md:pt-12 gap-4 sm:gap-8 ">
            <Link href={"/"}>
              <Image
                src={"/Logo.png"}
                alt="Logo"
                width={500}
                height={100}
                className="m-1 w-28 sm:w-36"
              />
              <h1
                className={` text-base md:text-xl tracking-wider font-bold uppercase text-center ${f_inter_800.className}`}
              >
                Jugaad
              </h1>
            </Link>
            <div className="flex flex-row items-center  justify-center my-7 w-full sm:my-0 gap-1">
              {FooterLinks.map((link, idx) => (
                <Link
                  href={link.to}
                  key={idx}
                  className={`font-mediummd:m-1 py-1 sm:border-r-[3px] sm:border-white px-1 md:pr-5 md:pl-3 text-sm md:text-lg leading-6 tracking-wide uppercase ${f_inika_700.className} text-center text-nowrap`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center sm:gap-1 sm:px-2">
            
            <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-center justify-center w-full px-2 sm:pt-3 sm:mt-2 lg:pt-4 lg:gap-4">
              <div className="w-full h-full px-2 flex flex-col items-center gap-2 py-1">
                <h3
                  className={`underline font-medium text-base sm:text-xl tracking-wide leading-none capitalize ${f_inter_800.className} p-3`}
                >
                  Email Address
                </h3>
                <p
                  className={`${f_inter_400.className} flex flex-col items-start justify-start leading-none text-base md:text-lg font-light text-white`}
                >
                  <span>jugaadclubuiet@gmail.com</span>
                </p>
              </div>
              <div className="w-full px-2 flex flex-col items-center justify-center sm:items-center gap-2 py-1 my-3 sm:my-0">
                <h3
                  className={`underline font-medium text-base sm:text-xl tracking-wide leading-none capitalize ${f_inter_800.className} p-3`}
                >
                  Phone Number
                </h3>
                <p
                  className={`${f_inter_400.className} flex flex-col gap-1 justify-center w-full items-center sm:items-center leading-none text-base lg:text-lg font-light text-white`}
                >
                  <span>Pranav - 8427311044 </span>
                  <span>Kunal - 8604329827</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center w-full lg:w-1/3 items-center gap-4 pt-4 md:pt-12">
            <div className={` font-medium text-base sm:text-xl tracking-wide leading-none capitalize ${f_inter_800.className}`}>
              Our designers and developers
            </div>
            <div className="text-sm hidden lg:flex text-wrap pb-4">From concept to code, our team excels, crafting experiences that truly compel. Innovation sparks, creativity swells, as designers and developers weave their spells.
            </div>
            <Avatars/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
