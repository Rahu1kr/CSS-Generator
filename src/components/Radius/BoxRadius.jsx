import React, { useState, useEffect } from "react";
import ControlRadius from "./ControlRadius";

const BoxRadius = () => {
  const [radius, setRadius] = useState("");

  const updateRadius = (s) => {
    setRadius(
      //   s.all
      //     ? `${s.all}px`:
      ` ${s.leftTop}px ${s.rightTop}px ${s.leftButtom}px ${s.rightButtom}px`
    );
  };

  return (
    <>
      <div className="flex justify-between w-[100vw] h-[100vh] overflow-auto">
        <div className="flex-grow-1 p-8 w-[50vw] overflow-scroll">
          <ControlRadius updateRadius={updateRadius} />
        </div>

        <div className="flex flex-col justify-center items-center w-[50vw]">
          <div className="h-[50vh] flex items-end">
            <div
              className="h-[200px] w-[200px] bg-[#F7821B] rounded-2xl"
              style={{ borderRadius: radius }}
            ></div>
          </div>
          <div className="h-[50vh] flex items-end">
            <div className="bg-neutral-800 p-4 rounded-xl shadow-sm opacity-80 text-white mb-14">
              <div className="flex items-start overflow-scroll">
                <span className="prop-name">border-radius: </span>
                <span className="text-orange-500 w-[500px]">{radius};</span>
                <button
                  className="ml-4"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`border-radius: ${radius};`)
                      .then(() => alert("Copied!"))
                      .catch((error) =>
                        console.error("Error in copying code: ", error)
                      );
                  }}
                >
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxRadius;
