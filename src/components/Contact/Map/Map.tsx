import React from "react";

type Props = {};

const Map = (props: Props) => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#030028] py-6 px-20 flex flex-row items-center justify-center">
        <div className="w-1/2 p-3">
          <div className="w-full h-[450px] p-2 bg-[#ffffff3f]"></div>
        </div>
        <div className="w-1/2 p-1 flex items-center justify-center flex-col">
          <div
            className="text-center p-14"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.75) 66%, rgba(3, 0, 40, 0.75) 100%)",
              backdropFilter: "blur(2px)",
            }}
          >
            <h1 className="font-bold text-2xl my-2 w-full">OUR ADRESSS</h1>
            <p className="w-full font-normal text-xl px-5 py-2 text-center flex flex-col">
              <span>University Institute of Engineering and Technology</span>
              <span>Sector 25, South Campus,</span>
              <span>Panjab University,</span>
              <span>Chandigarh (Union Territory),</span>
              <span>INDIA. PINCODE: 160014</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
