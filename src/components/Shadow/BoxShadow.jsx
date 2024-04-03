import React, { useState } from "react";
import ControlBox from "./ControlBox";

const BoxShadow = () => {
  const [shadows, setShadows] = useState([]);
  const [controls, setControls] = useState([{ index: 0 }]);
  // const notify = () => toast("Wow so easy!");

  const updateShadow = (s, id) => {
    const t = [...shadows];
    t[id] = s.inset
      ? `inset ${s.x}px ${s.y}px ${s.blur}px ${s.spread}px rgba(${+ parseInt(s.color.slice(-6, -4), 16) + ',' + parseInt(s.color.slice(-4, -2), 16) + ',' + parseInt(s.color.slice(-2), 16) + ',' + s.opacity })`
      : `${s.x}px ${s.y}px ${s.blur}px ${s.spread}px rgba(${+ parseInt(s.color.slice(-6, -4), 16) + ',' + parseInt(s.color.slice(-4, -2), 16) + ',' + parseInt(s.color.slice(-2), 16) + ',' + s.opacity })`;
    setShadows(t);
  };

  const addShadow = () => {
    setControls([...controls, { index: controls.length }]);
  };

  const removeControl = (indexToRemove) => {
    setShadows(shadows.filter((_, index) => index !== indexToRemove));
    setControls(controls.filter((control) => control.index !== indexToRemove));
  };

  return (
    <>
      <div className=" flex justify-between w-[100vw] h-[100vh] overflow-auto">
        <div className=" flex-grow-1 p-8 w-[50vw] overflow-scroll ">
          {controls.map((c) => (
            <ControlBox
              key={c.index}
              id={c.index}
              updateShadow={updateShadow}
              removeControl={removeControl}
            />
          ))}
          <p className="text-right">
            <button onClick={addShadow}>Add Layer</button>
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center w-[50vw] ">
          <div className=" h-[50vh] flex items-end">
            <div
              className=" h-[200px] w-[200px] bg-[#F7821B] rounded-2xl"
              style={{ boxShadow: shadows.join(",") }}
            ></div>
          </div>
          <div className=" h-[50vh] flex items-end">
            <div className=" bg-neutral-800 p-4 rounded-xl shadow-sm opacity-80 text-white mb-14">
              <div className=" flex items-start overflow-scroll">
                <span className="prop-name">box-shadow: </span>
                <span className=" text-orange-500 w-[500px]">
                  {shadows.join(", ")};
                </span>
                <button
                  className="ml-4"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`box-shadow: ${shadows.join(", ")};`)
                      .then(alert("Copied!"))
                      .catch(console.log("error in copy code"));
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

export default BoxShadow;
