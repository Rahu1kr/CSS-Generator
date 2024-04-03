import React, { useState, useEffect } from 'react'

const ControlRadius = ({updateRadius}) => {
    const [radiusModel, setRadiusModel] = useState({
        all: 0,
        leftTop: 0,
        rightTop: 0,
        leftButtom: 0,
        rightButtom: 0
    });

    const updateRadiusModel = (propr, val) => {
        setRadiusModel({
            ...radiusModel,
            [propr]: val,
        });
    };

    useEffect(() => {
        updateRadius(radiusModel);
    }, [radiusModel]);

  return (
    <>
      <div className="bg-neutral-900 p-4 rounded-xl shadow-sm opacity-80 text-white mb-4 mt-20">
        <label htmlFor="">All</label>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          onChange={(e) => updateRadiusModel("all", e.target.value)}
        />
        <label htmlFor="">Left-Top</label>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          onChange={(e) => updateRadiusModel("leftTop", e.target.value)}
        />
        <label htmlFor="">Right-Top</label>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          onChange={(e) => updateRadiusModel("rightTop", e.target.value)}
        />
        <label htmlFor="">Left-Buttom</label>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          onChange={(e) => updateRadiusModel("leftButtom", e.target.value)}
        />
        <label htmlFor="">Right-Buttom</label>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          onChange={(e) => updateRadiusModel("rightButtom", e.target.value)}
        />
      </div>
    </>
  )
}

export default ControlRadius