import React, { useEffect, useRef } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import Gallery from "./pages/gallery/Gallery";
import Events from "./pages/Events/Events";
import { Route, Routes, useNavigate } from "react-router-dom";
import useStore from "./store/store";
import { getRequest, clearHead } from "./utils/Request";
import VideoPage from "./pages/VideoPage/VideoPage";


const App = () => {
  const { isIntract, setIntraction, intracted, setIntracted } = useStore();
  const isInitialMount = useRef(true);
  const navigate = useNavigate();
  let timeoutId;

  

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    getRequest();
    if (intracted == true) {
      timeoutId = setInterval(() => {
        console.log("isIntract");
        navigate("/");
        setIntracted(false);
        clearHead();
      }, 10000);
    }
    console.log("intt", intracted);
    //test
    setTimeout(() => {
      setIntracted(false);
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
      console.log("Timeout cleared!");
    };
  }, [isIntract]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <div className="wrapper">
      <button className="hidden-btn" onClick={toggleFullscreen}>
        Toggle Fullscreen
      </button>
      

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
