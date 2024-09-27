import React from "react";
import "./Events.css";
import IMG01 from "../../assets/event02.jpeg";
import IMG02 from "../../assets/event01.jpeg";
import IMG03 from "../../assets/event03.jpeg";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  return (
    <div className="eventss">
      <h1 className="head">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={213}
          height={80}
          fill="none"
        >
          <path
            fill="#fff"
            d="M39.964 53.498H10.732V24.324h29.232v4.06H19.142v8.294h12.47v4.292h-12.47v8.294h20.822zM71.331 41.26h-3.944v4.176h-4.118v4.118h-4.176v4.176h-4.176v-3.944H50.74V45.61h-4.118v-4.118h-4.176V24.846h8.178v12.18H54.8v4.292h4.002v-4.06h4.176V24.846h8.352zm32.41 12.238H74.509V24.324h29.232v4.06H82.919v8.294h12.47v4.292H82.92v8.294h20.822zm31.367.232h-8.178v-3.944h-4.118V45.61h-4.118v-4.234h-4.06V53.73h-8.41V24.846h8.178v3.944h4.176v4.118h4.118v4.234h4.06V24.846h8.352zm25.683-24.882h-8.12V53.73h-8.352V29.08h-8.294v-4.234h24.766zm38.094 20.706h-3.944v4.176h-20.764v-3.944h-4.176v-4.234h8.178v4.002h12.47v-8.062h-16.472v-4.176h-4.176v-8.352h3.944v-4.118h16.646v3.944h4.176v4.176h-8.178v-4.002h-8.294v8.062h16.472v4.176h4.118z"
          />
        </svg>
      </h1>
      <div className="event-cards">
        <div className="event-card">
          <img className="event-image" src={IMG01} alt="" />
          <h3 className="event-title">Ideathon</h3>
          <p className="event-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          </p>
        </div>
        <div className="event-card">
          <img className="event-image" src={IMG02} alt="" />
          <h3 className="event-title">Hack.dev</h3>
          <p className="event-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          </p>
        </div>
        <div className="event-card">
          <img className="event-image" src={IMG03} alt="" />
          <h3 className="event-title">Robotics</h3>
          <p className="event-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          </p>
        </div>
      </div>
      <div
        className="back-btn"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={108}
          height={26}
          fill="none"
        >
          <path
            fill="#000"
            d="M24.95 22.15h-3.4v3.6H.05V.85H21.4v3.4h3.55v7.2H21.5v3.5h3.45zm-7.15-10.7V4.4H7.2v7.05zm0 10.7V15.1H7.2v7.05zm34.64 3.6h-7.05v-7.1h-10.6v7.1h-7.25V7.95h3.4V4.4h3.6V.85h10.75v3.4h3.6V7.8h3.55zM45.29 15V7.8h-3.55V4.4h-3.65V8h-3.4v7zm34.64-7.15h-7.05V4.4h-7.05v3.45h-3.65V18.5h3.5v3.65h7.05V18.7h7.2v3.45h-3.4v3.6H62.18v-3.4h-3.55v-3.6h-3.6V7.95h3.4V4.4h3.6V.85h14.35v3.4h3.55zm27.491 17.9h-10.6v-3.4h-3.55v-3.7h-3.5v7.1h-7.25V.85h7.05v10.6h3.5v-3.5h3.55V4.4h3.6V.85h7.2V4.3h-3.4v3.55h-3.55v3.6h-3.65v3.5h3.45v3.55h3.6v3.6h3.55z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Events;
