import React, { useState, useEffect } from "react";

const ControlBox = ({ updateShadow, removeControl, id }) => {
  const [shadowModel, setShadowModel] = useState({
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    opacity: 1,
    color: "#000000",
    inset: false,
  });

  const updateShadowModel = (propr, val) => {
    setShadowModel({
      ...shadowModel,
      [propr]: val,
    });
  };

  useEffect(() => {
    updateShadow(shadowModel, id);
  }, [shadowModel, id]);

  return (
    <>
      <div className="bg-neutral-900 p-4 rounded-xl shadow-sm opacity-80 text-white mb-4 mt-20">
        <label htmlFor="">Offset X</label>
        <input
          type="range"
          min="-100"
          max="100"
          defaultValue="0"
          onChange={(e) => updateShadowModel("x", e.target.value)}
        />
        <label htmlFor="">Offset Y</label>
        <input
          type="range"
          min="-100"
          max="100"
          defaultValue="0"
          onChange={(e) => updateShadowModel("y", e.target.value)}
        />
        <label htmlFor="">Blur</label>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          onChange={(e) => updateShadowModel("blur", e.target.value)}
        />
        <label htmlFor="">Spread</label>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          onChange={(e) => updateShadowModel("spread", e.target.value)}
        />
        <label htmlFor="">Opacity</label>
        <input
          type="range"
          min="0"
          step='0.01'
          max="1"
          defaultValue="1"
          onChange={(e) => updateShadowModel("opacity", e.target.value)}
        />
        <label htmlFor="">Color</label>
        <input
          type="color"
          onChange={(e) => updateShadowModel("color", e.target.value)}
        />
        <p>
          <span style={{ marginRight: ".5em" }}>Inset:</span>
          <input
            type="checkbox"
            onChange={(e) => updateShadowModel("inset", !shadowModel.inset)}
          />
        </p>
        {id !== 0 && (
          <button className="pt-4" onClick={() => removeControl(id)}>
            <i className="fa-regular fa-trash-can text-orange-400"></i>
          </button>
        )}
      </div>
    </>
  );
};

export default ControlBox;
