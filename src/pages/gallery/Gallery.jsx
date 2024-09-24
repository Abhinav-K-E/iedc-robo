import React from "react";
import "./gallery.css";

const gallery = () => {
  return (
    <div className="gallery">
      <div className="head">
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
      <section>
        <div class="box box-1"></div>
        <div class="box box-2"></div>
        <div class="box box-3"></div>
        <div class="box box-4"></div>
        <div class="box box-5"></div>
      </section>
    </div>
  );
};

export default gallery;
