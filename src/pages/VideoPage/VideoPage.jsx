import React, { useEffect, useState, useRef } from "react";
import "./VideoPage.css";
import ReactPlayer from "react-player";
import IDLE from "../../assets/idle.mp4";
import HI from "../../assets/hi.mp4";
import LOOKDOWN from "../../assets/lookdown.mp4";
import { baseUrl } from "../../contants";

const VideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(IDLE);
  const [currentVideoName, setCurrentVideoName] = useState(IDLE);
  const playerRef = useRef(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
  };

  const fetchVideoStatus = async () => {
    console.log("fetching video status...");
    try {
      const response = await fetch(`${baseUrl}/head_status`, {
        headers: { "ngrok-skip-browser-warning": "69420" },
      });

      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchhh(false);
    }, 500);
  }, []);

  useEffect(() => {
    const changeHead = async () => {
      const res = await fetch(
        `${baseUrl}/head_update?status=${currentVideoName}`,
        {
          headers: { "ngrok-skip-browser-warning": "69420" },
        }
      );
      console.log(res);
    };
    changeHead();
  }, [currentVideo]);
  const handleEnded = async () => {
    console.log("video ended");
    const res = await fetchhh(true);
    console.log(res);

    restartVideo();
  };

  const restartVideo = () => {
    console.log("ddd");
    if (playerRef.current) {
      playerRef.current.seekTo(0); // Restart the video from the beginning
    }
  };
  const fetchhh = async (ended) => {
    const res = await fetchVideoStatus();
    console.log(res);
    var emotion = res.emotion;
    if (emotion != "idle" || ended) {
      if (emotion === "lookDown") {
        setCurrentVideo(LOOKDOWN);
        setCurrentVideoName("lookDown");
      } else if (emotion === "sayHI") {
        setCurrentVideo(HI);
        setCurrentVideoName("sayHI");
      } else {
        setCurrentVideo(IDLE);
          setCurrentVideoName("idle");
      }
    }
  };
  return (
    <div className="video-page">
      <button className="hidden-btn" onClick={toggleFullscreen}>
        Toggle Fullscreen
      </button>

      <ReactPlayer
        ref={playerRef}
        className="video"
        url={currentVideo}
        muted={true}
        controls={false}
        width="100%"
        height="100%"
        playing
        onEnded={handleEnded}
        // loop={true}
      />
    </div>
  );
};

export default VideoPage;
