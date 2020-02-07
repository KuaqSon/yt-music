import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading_box">
      <div className="loading_wrap">
        <div className="loading">
          <div className="bounceball"></div>
          <div className="loading_text">LOADING</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
