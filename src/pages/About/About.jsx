import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about">
      <div className="head">
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
      <div className="gird-layout">
        <div className="about-img"></div>
        <div className="right-box">
          <div className="grid-cards">
            <div data-aos="fade-up" className="card-vr">
              <div className="card-i">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 128 128"
                  id="group"
                >
                  <path d="M79.23535,73.30438A19.13148,19.13148,0,0,1,75.6189,77H76.25A10.762,10.762,0,0,1,87,87.75V113H41V87.75A10.762,10.762,0,0,1,51.75,77h.6311a19.13148,19.13148,0,0,1-3.61646-3.69562A14.77463,14.77463,0,0,0,37,87.75v25.9751A3.27877,3.27877,0,0,0,40.2749,117H87.7251A3.27877,3.27877,0,0,0,91,113.7251V87.75A14.77463,14.77463,0,0,0,79.23535,73.30438Z" />
                  <path d="M49 62A15 15 0 1 0 64 47 15.017 15.017 0 0 0 49 62zM64 51A11 11 0 1 1 53 62 11.01245 11.01245 0 0 1 64 51zM4 65A18.02031 18.02031 0 0 1 22 47h2.11407a21.05289 21.05289 0 0 1-5.49646-3.7395A22.03427 22.03427 0 0 0 0 65V89a4.00458 4.00458 0 0 0 4 4H33V89H4zM41.88593 47H44a17.88931 17.88931 0 0 1 6.81555 1.34918 19.09749 19.09749 0 0 1 3.59552-2.7243 21.8476 21.8476 0 0 0-7.03821-2.35571A21.053 21.053 0 0 1 41.88593 47zM50 28A17 17 0 1 0 33 45 17.019 17.019 0 0 0 50 28zM33 41A13 13 0 1 1 46 28 13.01442 13.01442 0 0 1 33 41zM84 47h2.11407a21.053 21.053 0 0 1-5.48694-3.73083 21.8476 21.8476 0 0 0-7.03821 2.35571 19.09749 19.09749 0 0 1 3.59552 2.7243A17.88931 17.88931 0 0 1 84 47zM109.38239 43.2605A21.05289 21.05289 0 0 1 103.88593 47H106a18.02031 18.02031 0 0 1 18 18l.00244 24H95v4h29a4.00458 4.00458 0 0 0 4-4V65A22.03427 22.03427 0 0 0 109.38239 43.2605zM95 45A17 17 0 1 0 78 28 17.019 17.019 0 0 0 95 45zm0-30A13 13 0 1 1 82 28 13.01442 13.01442 0 0 1 95 15z" />
                </svg>
              </div>
              <div className="head-sm">About</div>
              <div className="card-txt">
                IEDC SJC, established in 2019, is a center supported by the
                Kerala Startup Mission, dedicated to fostering creativity and
                inspiring students to generate innovative ideas. Our primary
                objective is to cultivate a mindset that encourages creative
                thinking and innovation, leading to the development of useful
                products.
              </div>
            </div>
            <div data-aos="fade-up" className="card-vr">
              <div className="card-i">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  id="rocket"
                >
                  <path d="M497.7,19.8c-1.1-2.5-3.1-4.5-5.5-5.5c-1.3-0.6-129.3-54.4-234.6,50.8c-20.1,20.1-39.5,43.8-57.3,68.8l-24.3-5.6c-36.7-8.5-74.5,2.3-101.2,28.9L8.5,223.6c-17.6,17.6-6.3,47.5,18.2,49.4l93.4,7.5c-4.1,10.9-7.6,21.6-9.6,28.7c-1.8,6.3-1.5,12.8,0.4,18.8c-16.9,4.6-32.3,13-41,21.7c-19.2,19.1-36.3,102.8-39.5,119.4c-1.4,8,5.7,14.1,12.5,12.5c16.6-3.3,100.3-20.4,119.4-39.5c9.1-9.1,17.3-24.7,21.8-41c6.4,2,12.9,2,18.8,0.3h0.1c7.1-2,17.5-5.3,28.6-9.6l7.5,93.4c1.9,24.5,31.9,35.7,49.4,18.2l66.4-66.4c26.6-26.6,37.5-64.5,28.9-101.2l-5.6-24.3c25-17.8,48.7-37.2,68.8-57.3C552.2,149.1,498.3,21.1,497.7,19.8z M23.7,238.7L90,172.3c21.5-21.5,51.9-30.1,81.2-23.2l16.1,3.7c-23.9,35.9-44.1,73.5-58.7,106.9l-100.2-8C21.9,251.1,19.1,243.2,23.7,238.7z M147.2,427.1c-9.3,9.3-55.4,22.2-92.6,30.4c8.1-37.3,21-83.3,30.4-92.6c8.1-8.2,23.9-15.3,39.3-18.1l41,41c-0.1,0.4-0.1,0.8-0.2,1.3C162.1,403.8,154.8,419.5,147.2,427.1z M185.6,377.8l-51.4-51.4c-3-3-4.2-7.5-3.1-11.5c0.9-3.1,2.6-8.9,4.8-15.4l76.6,76.6c-4.6,1.6-10.7,3.5-15.4,4.8C193.1,382.1,188.7,380.9,185.6,377.8z M362.9,340.8c6.8,29.5-1.8,59.8-23.2,81.2l-66.4,66.4c-4.6,4.6-12.4,1.7-13-4.7l-8-100.2c33.4-14.5,71-34.8,106.9-58.7L362.9,340.8z M234.4,367.8l-90.3-90.3c25.5-62.3,74.2-143,128.5-197.3c62-62,143.5-71.3,207-47.9c7.5,21,37.3,121.9-47.9,207.1C377.4,293.7,296.7,342.4,234.4,367.8z" />
                  <path d="M312.6,95.4c-28.7,28.7-28.7,75.2,0,104c28.7,28.7,75.2,28.7,104,0c28.7-28.7,28.7-75.3,0-104C387.8,66.7,341.3,66.7,312.6,95.4z M401.5,184.3c-20.4,20.4-53.4,20.4-73.8,0s-20.4-53.4,0-73.8s53.4-20.4,73.8,0C421.8,130.9,421.8,164,401.5,184.3z" />
                </svg>
              </div>
              <div className="head-sm">Vision</div>
              <div className="card-txt">
                Through our IEDC, we aspire to foster an innovation culture that
                transcends boundaries and encourages students to take calculated
                risks, develop disruptive technologies, and establish ventures
                that positively impact their communities and the world at large.
                By providing cutting-edge resources, mentorship, and exposure to
                new-gen technologies.
              </div>
            </div>
          </div>
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

export default About;
