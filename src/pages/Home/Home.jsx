import React from "react";
import "./Home.css";

import TIE from "../../assets/tie.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-img">
        <img src={TIE} alt="" />
      </div>
      <Link to="/dashboard" className="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={130}
          height={26}
          fill="none"
        >
          <path
            fill="#000"
            d="M24.95 21.65h-3.4v3.6H3.65v-3.4H.05V18.2H7.1v3.45h10.75V14.7H3.65v-3.6H.05V3.9h3.4V.35H17.8v3.4h3.6v3.6h-7.05V3.9H7.2v6.95h14.2v3.6h3.55zM47.09 3.8h-7v21.45h-7.2V4h-7.15V.35h21.35zm32.84 21.45h-7.05v-7.1h-10.6v7.1h-7.25V7.45h3.4V3.9h3.6V.35h10.75v3.4h3.6V7.3h3.55zM72.78 14.5V7.3h-3.55V3.9h-3.65v3.6h-3.4v7zm34.641 0h-7.05V18h3.5v3.6h3.55v3.65h-10.6v-3.4h-3.55v-3.7h-3.5v7.1h-7.25V.35h21.35v3.4h3.55zm-7.15-3.55V3.9h-10.6v10.6h7.2v-3.55zm29.29-7.15h-7v21.45h-7.2V4h-7.15V.35h21.35z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Home;
