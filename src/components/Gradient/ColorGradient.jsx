import React, { useState } from "react";

const ColorGradient = () => {
  const [direction, setDirection] = useState("to left top");
  const [color1, setColor1] = useState("#5665E9");
  const [color2, setColor2] = useState("#A271F8");

  const generateGradient = () => {
    return `linear-gradient(${direction}, ${color1}, ${color2})`;
  };

  const handleCopyCode = () => {
    const code = `background-image: ${generateGradient()}`;
    navigator.clipboard
      .writeText(code)
      .then(() => alert("Code copied to clipboard"))
      .catch((error) => console.error("Error copying code: ", error));
  };

  return (
    <>
      <div className="flex justify-between w-[100vw] h-[100vh] overflow-auto">
        <div className="flex-grow-1 p-8 w-[50vw] overflow-scroll">
          <div className="bg-neutral-900 p-4 rounded-xl shadow-sm opacity-80 text-white mb-4 mt-20">
            <div className=" flex gap-6 pb-6">
              <p>Direction</p>
              <div className="text-black">
                <select
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
                >
                  <option value="to top">Top</option>
                  <option value="to right top">Right top</option>
                  <option value="to right">Right</option>
                  <option value="to right bottom">Right bottom</option>
                  <option value="to bottom">Bottom</option>
                  <option value="to left bottom">Left bottom</option>
                  <option value="to left">Left</option>
                  <option value="to left top" selected>
                    Left top
                  </option>
                </select>
              </div>
            </div>
            <div className="flex gap-6 pb-4">
              <p className="w-20">Colour-1</p>
              {/* <div className="colors"> */}
              <input
                className=" w-[100%]"
                type="color"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
              />
            </div>
            <div className="flex  gap-6">
              <p className="w-20">Colour-2</p>
              <input
                className=" w-[100%] "
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
              />
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[50vw]">
          <div className="h-[50vh] flex items-end">
            <div
              className="h-[200px] w-[200px] bg[#F7821B] rounded-2xl"
              style={{ backgroundImage: generateGradient() }}
            ></div>
          </div>
          <div className="h-[50vh] flex items-end">
            <div className="bg-neutral-800 p-4 rounded-xl shadow-sm opacity-80 text-white mb-14">
              <div className="flex items-start overflow-scroll">
                <span className="prop-name">background-image: </span>
                <span className="text-orange-500 w-[500px]">
                  {generateGradient()};
                </span>
                <button className="ml-4" onClick={handleCopyCode}>
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

export default ColorGradient;
