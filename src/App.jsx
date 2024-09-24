import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import Gallery from "./pages/gallery/Gallery";
import Events from "./pages/Events/Events";
import { Route, Routes } from "react-router-dom";
import useStore from "./store/store";
import { getRequest } from "./utils/Request";

const App = () => {
  const { isIntract, setIntraction } = useStore();
  useEffect(() => {
    getRequest();
  }, [isIntract]);
  document.addEventListener("touchstart", () => {
    setIntraction();
  });
  document.addEventListener("touchmove", () => {
    setIntraction();
  });
  document.addEventListener("mousedown", () => {
    setIntraction();
  });
  document.addEventListener("mousemove", () => {
    setIntraction();
  });
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
};

export default App;
