import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import BoxShadow from "./components/Shadow/BoxShadow";
import BoxRadius from "./components/Radius/BoxRadius";
import ColorGradient from "./components/Gradient/ColorGradient";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes path="/">
          <Route path="/" element={<BoxShadow />} />
          <Route path="/radius" element={<BoxRadius />} />
          <Route path="/gradient" element={<ColorGradient />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
