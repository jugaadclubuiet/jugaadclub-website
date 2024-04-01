import React from "react";
import Image from "next/image";
import Link from "next/link";
import navlinks from "./navlinks"
// icons
import { FaSearch } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <div className="w-full p-5 flex items-center justify-between border-2 border-solid border-slate-400 border-t-0 border-l-0 border-r-0">
        <Image
          src={"/jugaad-white.png"}
          alt="Logo"
          width={1000}
          height={100}
          className="w-40 aspect-video h-20  mx-2"
        />
        <div className="flex flex-row items-center justify-between">
          {navlinks.map((links) => (
            <Link
                key={links.id}
                href={links.path}
                className="uppercase font-semibold text-white mx-5 text-2xl hover:text-yellow-400 transition-all ease-in-out tracking-normal leading-tight"
            >
              {links.name}
            </Link>
          ))}
        </div>
        <FaSearch
          className="text-white font-black text-3xl cursor-pointer mx-2 hover:text-yellow-400 hover:scale-110 transition-all ease-in"
          title="Search Jugaad"
        />
      </div>
    </>
  );
};

export default Navbar;
