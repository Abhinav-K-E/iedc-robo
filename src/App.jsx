import React, { useEffect, useRef } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import Gallery from "./pages/gallery/Gallery";
import Events from "./pages/Events/Events";
import { Route, Routes } from "react-router-dom";
import useStore from "./store/store";
import { getRequest } from "./utils/Request";
import VideoPage from "./pages/VideoPage/VideoPage";

const App = () => {
  const { isIntract, setIntraction } = useStore();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    getRequest();
  }, [isIntract]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <div className="wrapper">
      <button className="hidden-btn" onClick={toggleFullscreen}>Toggle Fullscreen</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/head" element={<VideoPage />} />
      </Routes>
    </div>
  );
};

export default App;
