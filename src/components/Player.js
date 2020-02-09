import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Player.css";

export default function Player({ src, name }) {
  // Docs: https://github.com/CookPete/react-player/blob/master/src/demo/App.js
  const [player, setPlayer] = useState({});
  const [played, setPlayed] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [pip, setPip] = useState(false);
  const [playing, setPlaying] = useState(true);

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

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const getSeekPercent = () => {
    const percent = played * 100;
    return {
      background: `linear-gradient(90deg, #1abc9c ${percent}%, rgba(255, 255, 255, 0.216) ${percent}%)`
    };
  };

  return (
    <div className="card acrylic">
      <div>
        {!playing && (
          <div onClick={() => handlePlay()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="16px"
              height="16px"
              style={{
                "-ms-transform": "rotate(360deg)",
                "-webkit-transform": "rotate(360deg)",
                transform: "rotate(360deg)",
                width: "16px",
                height: "16px"
              }}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M10.8 15.9l4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1a.5.5 0 0 0-.8.4v7c0 .41.47.65.8.4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"
                fill="#626262"
              />
            </svg>
          </div>
        )}
        {playing && (
          <div onClick={() => handlePause()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="16px"
              height="16px"
              style={{
                "-ms-transform": "rotate(360deg)",
                "-webkit-transform": "rotate(360deg)",
                transform: "rotate(360deg)",
                width: "16px",
                height: "16px"
              }}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M10 16c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1zm2-14C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm2-4c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1z"
                fill="#626262"
              />
            </svg>
          </div>
        )}
      </div>
      <div>
        <div className="range-slider">
          <input
            className="range-slider__range"
            style={getSeekPercent()}
            type="range"
            min={0}
            max={1}
            step="any"
            value={played}
            // onMouseDown={this.handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            onPlay={handlePlay}
            onPause={handlePause}
          />
        </div>
      </div>

      <div style={{ display: "none" }}>
        <ReactPlayer ref={ref} url={src} onProgress={handleProgress} playing={playing} />
      </div>
    </div>
  );
}
