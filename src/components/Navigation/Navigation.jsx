import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="fixed left-0 z-10  flex w-[100%] h-16 justify-between items-center px-16 bg-[#e8ac77] ">
      <div>
      <Link to="/">
        <h1>Editor</h1>
      </Link>
      </div>
      <div className=" flex gap-12">
        <Link to="/">
          <h2>Box-Shadow</h2>
        </Link>
        <Link to="/radius">
          <h2>Box-Radius</h2>
        </Link>
        <Link to="/gradient">
          <h2>Gradient</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
