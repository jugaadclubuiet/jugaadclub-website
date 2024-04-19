import React from "react";
import { f_inika_700, f_inter_700 } from "@/styles/fonts";
import { TechTeam, NonTechTeam } from "./TeamsInfo";

type Props = {};

const TeamName = (props: Props) => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-row justify-center gap-60 py-20 bg-[#ffffff23]">
        <div
          className="relative rounded-tr-[100px] rounded-bl-[100px] w-fit mr-10 bg-[#092151] px-24 py-10 flex flex-col items-start justify-center gap-1"
          style={{
            boxShadow: "-10px 10px 5px #353535",
          }}
        >
          <div className="px-16 py-3 rounded-l-full absolute top-[190px] -right-[170px] bg-[#D9D9D9] border-[2px] border-solid border-black">
            <h2
              className={`font-bold ${f_inter_700.className} text-xl text-black uppercase text-nowrap`}
            >
              Tech Team
            </h2>
          </div>
          {TechTeam.map((team, idx) => (
            <span
              key={idx}
              className={`text-white uppercase ${f_inika_700.className} font-bold text-base`}
            >
              {team.name}
            </span>
          ))}
        </div>
        <div
          className="relative rounded-tl-[100px] rounded-br-[100px] w-fit ml-10 bg-[#092151] px-24 py-10 flex flex-col items-start justify-center gap-1"
          style={{
            boxShadow: "10px 10px 5px #353535",
          }}
        >
          <div className="px-16 py-3 rounded-r-full absolute top-[300px] -left-[210px] bg-[#D9D9D9] border-[2px] border-solid border-black">
            <h2
              className={`font-bold ${f_inter_700.className} text-xl text-black uppercase text-nowrap`}
            >
              Non Tech Team
            </h2>
          </div>
          {NonTechTeam.map((team, idx) => (
            <span
              key={idx}
              className={`text-white uppercase ${f_inika_700.className} font-bold text-base`}
            >
              {team.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamName;
