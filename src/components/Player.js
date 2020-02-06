import React from "react";

export default function Player({ src, name }) {
  return (
    <div className="player_cont">
      {name}
      <audio
        id="youtube"
        autoPlay={true}
        controls={true}
        loop={true}
        src={src}
      ></audio>
    </div>
  );
}
