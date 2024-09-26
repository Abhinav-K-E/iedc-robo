import React, { useEffect } from "react";
import "./Dashboard.css";
import BG from "../../assets/Vector.png";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../store/store";

const Dashboard = () => {
  const { isIntract, setIntraction, intracted, setIntracted } = useStore();
  const navigate = useNavigate();
  return (
    <div className="dash">
      <h1 className="head">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={503}
          height={40}
          fill="none"
        >
          <path
            fill="#fff"
            d="M33.328 39.06H.876v-5.32h10.716V6.76H.876V1.212h32.452v5.244H22.612v27.056h10.716zm44.065-.304H39.09V.528h38.304v5.32H50.11v10.868h16.34v5.624H50.11v10.868h27.284zm41.101-10.564h-5.168v5.396h-5.396v5.472H80.646V1.212h26.98V6.38h5.472v5.396h5.396zm-10.868 0V11.776h-5.396V6.608H91.514v26.98h10.944v-5.396zm52.653-16.34h-10.716V6.608h-10.716v5.244h-5.548V28.04h5.32v5.548h10.716v-5.244h10.944v5.244h-5.168v5.472h-21.812v-5.168h-5.396V28.42h-5.472V12.004h5.168V6.608h5.472V1.212h21.812V6.38h5.396zm51.508 16.34h-5.168v5.396h-5.396v5.472h-27.284V1.212h26.98V6.38h5.472v5.396h5.396zm-10.868 0V11.776h-5.396V6.608h-10.716v26.98h10.944v-5.396zm53.337 10.564h-38.304V.528h38.304v5.32h-27.284v10.868h16.34v5.624h-16.34v10.868h27.284zm41.102-16.036h-5.168v5.472h-5.396v5.396h-5.472v5.472h-5.472v-5.168h-5.472V28.42h-5.396v-5.396h-5.472V1.212h10.716v15.96h5.472v5.624h5.244v-5.32h5.472V1.212h10.944zm41.785 16.34h-10.716V28.268h-16.112V39.06h-11.02V12.004h5.168V6.608h5.472V1.212h16.34V6.38h5.472v5.396h5.396zm-10.868-16.34V11.776h-5.396V6.608h-5.548v5.472h-5.168v10.64zm52.653 16.34h-26.98v-5.168h-5.396V28.42h-5.472V12.004h5.168V6.608h5.472V1.212h27.208v5.244h-21.432v5.396h-5.548V28.04h5.32v5.548h10.868V23.024h-5.32v-5.548h16.112zm40.189 0h-32.452v-5.32h10.716V6.76h-10.716V1.212h32.452v5.244h-10.716v27.056h10.716zm43.381-16.34h-10.716v5.32h5.32v5.472h5.396v5.548h-16.112v-5.168h-5.396v-5.624h-5.32V39.06h-11.02V1.212h32.452V6.38h5.396zm-10.868-5.396V6.608h-16.112V22.72h10.944v-5.396zm51.057 21.736h-32.452v-5.32h10.716V6.76h-10.716V1.212h32.452v5.244h-10.716v27.056h10.716z"
          />
        </svg>
      </h1>
      <div className="cards">
        <div className="cards-inline">
          <Link
            to="/about"
            className="card"
            onClick={() => {
              setIntraction(!isIntract);
              setIntracted(true);
            }}
          >
            <div className="card-name">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={251}
                height={80}
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M38.942 53.73h-8.178v-8.236H18.468v8.236h-8.41V33.082h3.944v-4.118h4.176v-4.118h12.47v3.944h4.176v4.118h4.118zm-8.294-12.47v-8.352H26.53v-3.944h-4.234v4.176h-3.944v8.12zm40.183 8.294h-3.944v4.176h-24.94V24.846h24.766v3.944h4.118v8.352h-4.002v4.06h4.002zm-8.294-12.412v-8.178H50.24v8.178zm0 12.412v-8.178H50.24v8.178zm40.182 0h-3.944v4.176H78.011v-3.944h-4.176V28.964h3.944v-4.118h20.822v3.944h4.118zm-8.294 0v-20.59H82.13v20.59zm40.183 0h-3.944v4.176H109.9v-3.944h-4.176v-24.94h8.178v24.708h12.354V24.846h8.352zm25.683-20.706h-8.12V53.73h-8.352V29.08h-8.294v-4.234h24.766zm45.514 20.706h-3.944v4.176h-20.764v-3.944h-4.176v-24.94h8.178v24.708h12.354V24.846h8.352zm31.889 0h-3.944v4.176h-20.764v-3.944h-4.176v-4.234h8.178v4.002h12.47v-8.062h-16.472v-4.176h-4.176v-8.352h3.944v-4.118H229.4v3.944h4.176v4.176h-8.178v-4.002h-8.294v8.062h16.472v4.176h4.118z"
                />
              </svg>
            </div>
            <div className="card-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                fill="none"
              >
                <path
                  stroke="#111"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  strokeWidth={2.5}
                  d="M38.48 15.813 54.667 32 38.48 48.187M9.333 32h44.88"
                />
              </svg>
            </div>
          </Link>
          <Link
            className="card"
            to="/gallery"
            onClick={() => {
              setIntraction(!isIntract);
              setIntracted(true);
            }}
          >
            <div className="card-name">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={219}
                height={30}
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M28.942 29.73H8.352v-3.944H4.234V21.61H.058V9.082h3.944V4.964h4.176V.846h20.764v4.002H12.586v4.118H8.352V21.32h4.06v4.234h8.294v-8.062h-4.06v-4.234h12.296zm31.889 0h-8.178v-8.236H40.357v8.236h-8.41V9.082h3.944V4.964h4.176V.846h12.47V4.79h4.176v4.118h4.118zm-8.294-12.47V8.908h-4.118V4.964h-4.234V9.14H40.24v8.12zm33.976 12.47H61.747V.846h8.178v24.65h16.588zm31.889 0H93.636V.846h8.178v24.65h16.588zm38.617-.232h-29.232V.324h29.232v4.06h-20.822v8.294h12.47v4.292h-12.47v8.294h20.822zm31.366-12.238h-8.178v4.06h4.06v4.176h4.118v4.234h-12.296v-3.944h-4.118v-4.292h-4.06v8.236h-8.41V.846h24.766V4.79h4.118zm-8.294-4.118V4.964h-12.296V17.26h8.352v-4.118zm38.095 0h-3.944v4.118h-4.118v12.47h-8.41V17.492h-4.118v-4.176h-4.176V.846h8.178v12.296h8.236V.846h8.352z"
                />
              </svg>
            </div>
            <div className="card-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                fill="none"
              >
                <path
                  stroke="#111"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  strokeWidth={2.5}
                  d="M38.48 15.813 54.667 32 38.48 48.187M9.333 32h44.88"
                />
              </svg>
            </div>
          </Link>
        </div>
        <Link
          to="/events"
          className="cards-inline"
          onClick={() => {
            setIntraction(!isIntract);
            setIntracted(true);
          }}
        >
          <div className="card">
            <div className="card-name">
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
            </div>
            <div className="card-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                fill="none"
              >
                <path
                  stroke="#111"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  strokeWidth={2.5}
                  d="M38.48 15.813 54.667 32 38.48 48.187M9.333 32h44.88"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
      <img src={BG} alt="" className="bg" />
      <div className="back-btn"
      onClick={()=>{navigate('/')}}
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

export default Dashboard;
