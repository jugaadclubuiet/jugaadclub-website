import React from "react";
import { f_inter_700 } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaPhoneAlt, FaGithub } from "react-icons/fa";

type Props = {};

const Masthead = (props: Props) => {
  return (
    <>
      <div className="w-full min-h-screen flex items-center flex-col pt-32 sm:pr-[48px] bg-[#ffffff23]">
        <div className="w-full px-3 py-8 bg-[#ffffff8a] flex items-center justify-center">
          <h1
            className={`uppercase text-3xl lg:text-4xl text-black ${f_inter_700.className} font-bold`}
            style={{
              WebkitTextStrokeWidth: 1,
              WebkitTextStrokeColor: "#C4B567",
            }}
          >
            MEET THE TEAM
          </h1>
        </div>
        <div className="w-full py-5 px-3 mt-20 relative flex flex-col items-start gap-[161px]">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-40 my-2 w-full">
            <div
              className="bg-[#D9D9D9] w-fit relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-bl-[50px]"
              style={{ boxShadow: "-5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-row">
                <Image
                  src={"/members/member1.jpg"}
                  alt="Team"
                  width={250}
                  height={250}
                  className="w-[150px] h-[150px] rounded-full border-2 border-black border-solid absolute -top-[50%] left-[20%] lg:-top-[25%] lg:-left-[25%]"
                />
                <div className="lg:pr-3 lg:pl-12 py-2 px-5 mt-7 lg:mt-0 flex flex-col items-center justify-between w-full lg:max-w-[200px]">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center`}
                  >
                    Name of Student
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1`}
                  >
                    Position
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"#"}>
                  <FaLinkedin />
                </Link>
                <Link href={"#"}>
                  <FaInstagram />
                </Link>
                <Link href={"#"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"#"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
            <div
              className="bg-[#D9D9D9] w-fit relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-br-[50px]"
              style={{ boxShadow: "5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-row">
                <Image
                  src={"/members/member1.jpg"}
                  alt="Team"
                  width={250}
                  height={250}
                  className="w-[150px] h-[150px] rounded-full border-2 border-black border-solid absolute -top-[50%] right-[20%] lg:-top-[25%] lg:-right-[25%]"
                />
                <div className="lg:pl-3 lg:pr-12 py-2 px-5 mt-6 lg:mt-0 flex flex-col items-center justify-between w-full lg:max-w-[200px]">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center`}
                  >
                    Name of Student
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1`}
                  >
                    Position
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"#"}>
                  <FaLinkedin />
                </Link>
                <Link href={"#"}>
                  <FaInstagram />
                </Link>
                <Link href={"#"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"#"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-32 w-full my-2">
            <div
              className="bg-[#D9D9D9] w-fit relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-bl-[50px]"
              style={{ boxShadow: "-5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-row">
                <Image
                  src={"/members/member1.jpg"}
                  alt="Team"
                  width={250}
                  height={250}
                  className="w-[150px] h-[150px] rounded-full border-2 border-black border-solid absolute -top-[50%] left-[20%] lg:-top-[25%] lg:-left-[25%]"
                />
                <div className="lg:pr-3 lg:pl-12 py-2 px-5 mt-6 lg:mt-0 flex flex-col items-center justify-between w-full lg:max-w-[200px]">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center`}
                  >
                    Name of Student
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1`}
                  >
                    Position
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"#"}>
                  <FaLinkedin />
                </Link>
                <Link href={"#"}>
                  <FaInstagram />
                </Link>
                <Link href={"#"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"#"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
            <div
              className="bg-[#D9D9D9] w-fit relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-br-[50px]"
              style={{ boxShadow: "-5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-row">
                <Image
                  src={"/members/member1.jpg"}
                  alt="Team"
                  width={250}
                  height={250}
                  className="w-[150px] h-[150px] rounded-full border-2 border-black border-solid absolute -top-[50%] left-[20%]"
                />
                <div className="px-5 py-2 mt-6 flex flex-col items-center justify-between w-full">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center`}
                  >
                    Name of Student
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1`}
                  >
                    Position
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"#"}>
                  <FaLinkedin />
                </Link>
                <Link href={"#"}>
                  <FaInstagram />
                </Link>
                <Link href={"#"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"#"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
            <div
              className="bg-[#D9D9D9] w-fit relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-br-[50px]"
              style={{ boxShadow: "5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-row">
                <Image
                  src={"/members/member1.jpg"}
                  alt="Team"
                  width={250}
                  height={250}
                  className="w-[150px] h-[150px] rounded-full border-2 border-black border-solid absolute -top-[50%] right-[20%] lg:-top-[25%] lg:-right-[25%]"
                />
                <div className="lg:pl-3 lg:pr-12 py-2 px-5 mt-6 lg:mt-0 flex flex-col items-center justify-between w-full lg:max-w-[200px]">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center`}
                  >
                    Name of Student
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1`}
                  >
                    Position
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"#"}>
                  <FaLinkedin />
                </Link>
                <Link href={"#"}>
                  <FaInstagram />
                </Link>
                <Link href={"#"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"#"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-40 w-full my-2">
            <div
              className="bg-[#D9D9D9] w-fit relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-bl-[50px]"
              style={{ boxShadow: "-5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-row">
                <Image
                  src={"/members/member1.jpg"}
                  alt="Team"
                  width={250}
                  height={250}
                  className="w-[150px] h-[150px] rounded-full border-2 border-black border-solid absolute -top-[50%] left-[20%] lg:-top-[25%] lg:-left-[25%]"
                />
                <div className="lg:pr-3 lg:pl-12 py-2 px-5 mt-6 lg:mt-0 flex flex-col items-center justify-between w-full lg:max-w-[200px]">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center`}
                  >
                    Name of Student
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1`}
                  >
                    Position
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"#"}>
                  <FaLinkedin />
                </Link>
                <Link href={"#"}>
                  <FaInstagram />
                </Link>
                <Link href={"#"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"#"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
            <div
              className="bg-[#D9D9D9] w-fit relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-br-[50px]"
              style={{ boxShadow: "5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-row">
                <Image
                  src={"/members/member1.jpg"}
                  alt="Team"
                  width={250}
                  height={250}
                  className="w-[150px] h-[150px] rounded-full border-2 border-black border-solid absolute -top-[50%] right-[20%] lg:-top-[25%] lg:-right-[25%]"
                />
                <div className="lg:pl-3 lg:pr-12 py-2 px-5 mt-6 lg:mt-0 flex flex-col items-center justify-between w-full lg:max-w-[200px]">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center`}
                  >
                    Name of Student
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1`}
                  >
                    Position
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"#"}>
                  <FaLinkedin />
                </Link>
                <Link href={"#"}>
                  <FaInstagram />
                </Link>
                <Link href={"#"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"#"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Masthead;
