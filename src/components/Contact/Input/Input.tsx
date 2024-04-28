"use client";

import React, { useState } from "react";
import Image from "next/image";

type Props = {};

const Input = (props: Props) => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    query: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ formData });
  };

  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center"
        style={{
          background:
            "url('/Contact/inputBG.png') lightgray 50% / cover no-repeat",
        }}
      >
        <div
          className=" sm:px-6 py-14 flex flex-row mx-10 w-full md:w-[45%] md:gap-4  top-[-40px] sm:top-[-80px] md:top-0 items-center  justify-center relative z-[1]"
          style={{
            background:
              "radial-gradient(153.4% 101.71% at 91.63% 0%, rgba(10, 6, 67, 0.71) 0%, #030028 100%)",
            boxShadow: "15px 20px 20.2px 0px #030028",
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-[60%] items-center gap-7 justify-center px-2 py-4"
          >
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              id="usersname"
              placeholder="Your Name"
              required={true}
              className="font-serif text-base text-white bg-transparent py-2 border-2 border-solid border-b-white border-x-0 border-t-0 w-full outline-none placeholder:text-white px-3"
            />
            <div className="flex flex-row items-center justify-between gap-10 md:gap-5">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                id="phoneNumber"
                required={true}
                placeholder="Phone no."
                className="font-serif text-base text-white bg-transparent py-2 border-2 border-solid border-b-white border-x-0 border-t-0 w-full outline-none placeholder:text-white px-3"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                id="email"
                required={true}
                placeholder="Email"
                className="font-serif text-base text-white bg-transparent py-2 border-2 border-solid border-b-white border-x-0 border-t-0 w-full outline-none placeholder:text-white px-3"
              />
            </div>
            <input
              type="text"
              name="query"
              value={formData.query}
              onChange={handleInputChange}
              id="query"
              required={true}
              placeholder="Your query"
              className="font-serif text-base text-white bg-transparent py-2 border-2 border-solid border-b-white border-x-0 border-t-0 w-full outline-none placeholder:text-white px-3"
            />
            <button
              type="submit"
              className="uppercase px-6 md:px-10 py-2 rounded-2xl bg-white text-black font-semibold text-sm md:text-xl font-serif text-center"
            >
              Submit
            </button>
          </form>
          <div className="p-1 m-1">
            <Image
              src={"/Contact/input.png"}
              alt="/"
              width={190}
              height={190}
              draggable={false}
              className="w-[150px] hidden md:flex h-[150px]"
            />
          </div>
        </div>
        <div
          className=" w-[300px] h-[300px] sm:h-[400px] sm:w-[400px] lg:w-[550px] lg:h-[550px] bg-[#302F2A] rounded-[50%] flex flex-col items-center justify-center md:pl-[100px] lg:pl-[180px] pr-4 relative md:right-[100px] lg:right-[220px] bottom-0"
          style={{
            boxShadow: "40px 8px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <h1 className="text-white font-bold text-3xl md:text-5xl font-serif w-full text-center md:my-2">
            Our Info
          </h1>
          <div className="w-full h-[2px] bg-white my-1"></div>
          <div className="w-full h-[2px] bg-white my-1"></div>
          <div className="text-white flex text-sm md:text-xl flex-col gap-3 my-5 md:px-6 m-1">
            <p className="flex flex-col gap-1">
              <span className="uppercase underline font-normal py-2 font-serif">
                JUGAAD EMAIL
              </span>
              <span className="font-serif  font-light pl-1">
                jugaadclubuiet@gmail.com
              </span>
            </p>
            <p className="flex flex-col px-1 gap-1">
              <span className="text-white font-serif font-normal ">
                Pranav: <span className="font-light">(+91) 8427311044</span>
              </span>
              <span className="text-white font-serif font-normal">
                Kunal: <span className="font-light">(+91) 8604329827</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
