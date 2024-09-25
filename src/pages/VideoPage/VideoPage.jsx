import React, { useEffect, useState } from "react";
import "./VideoPage.css";
import ReactPlayer from "react-player";
import IDLE from "../../assets/idle.mp4";
import HI from "../../assets/hi.mp4";
import LOOKDOWN from "../../assets/lookdown.mp4";

import { baseUrl } from "../../contants";

const VideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(IDLE);


  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
  };

  const handleNextVideo = async () => {
    try {
      const response = await fetch(`${baseUrl}/head_status`, {
        headers: { "ngrok-skip-browser-warning": "69420" },
      });

      if (response.ok) {
        setCurrentVideo(IDLE);
        const data = await response.json();
        console.log("Fetched data:", data.emotion);

        switch (data.emotion) {
          case "lookDown":
            setCurrentVideo(LOOKDOWN);
            break;
          case "hi":
            setCurrentVideo(HI);
            break;
          default:
            setCurrentVideo(IDLE);
            break;
        }
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="video-page">
      <button className="hidden-btn" onClick={toggleFullscreen}>Toggle Fullscreen</button>

      <ReactPlayer
        className="video"
        url={currentVideo}
        muted={true}
        controls={false}
        width="100%"
        height="100%"
        onEnded={handleNextVideo}
        playing
      />
    </div>
  );
};

export default VideoPage;