import React from "react";
import "./VideoPage.css";
import ReactPlayer from "react-player";
import IDLE from "../../assets/hi.mp4";
import HI from "../../assets/hi.mp4";
import LOOKDOWN from "../../assets/hi.mp4";

import { useState } from "react";
const VideoPage = () => {
  const videos = [IDLE, HI, LOOKDOWN];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };
  return (
    <div className="video-page">
      <ReactPlayer
        className="video"
        url={videos[currentVideoIndex]}
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
