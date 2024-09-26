import React from "react";
import "./Events.css";
import IMG01 from "../../assets/about.jpeg";
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
          <img className="event-image" src={IMG01} alt="" />
          <h3 className="event-title">Hack.dev</h3>
          <p className="event-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          </p>
        </div>
        <div className="event-card">
          <img className="event-image" src={IMG01} alt="" />
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
          width={24}
          height={24}
          fill="none"
        >
          <path
            fill="#fff"
            d="m16.95 19.071-1.414 1.414L7.05 12l8.486-8.485 1.414 1.414-7.071 7.07z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Events;
