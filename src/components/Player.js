import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function Player({ src, name }) {
  // Docs: https://github.com/CookPete/react-player/blob/master/src/demo/App.js
  const [player, setPlayer] = useState({});
  const [played, setPlayed] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [pip, setPip] = useState(false);

  const ref = player => {
    setPlayer(player);
  };

  const handleSeekChange = e => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = e => {
    player.seekTo(parseFloat(e.target.value));
  };

  const handleProgress = state => {
    setLoaded(state.loaded);
    setPlayed(state.played);
  };

  return (
    <div className="plyer_panel">
      <div className="card acrylic">
        {name}
        {/* <div>
          <audio id="youtube" autoPlay={true} controls={true} loop={true} src={src}></audio>
        </div> */}

        <div>
          <label>Seek</label>
          <div>
            <input
              type="range"
              min={0}
              max={1}
              step="any"
              value={played}
              // onMouseDown={this.handleSeekMouseDown}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
            />
          </div>
        </div>

        <div style={{ display: "none" }}>
          <ReactPlayer ref={ref} url={src} onProgress={handleProgress} playing />
        </div>
      </div>
    </div>
  );
}
