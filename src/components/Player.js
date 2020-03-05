import React, { useState, forwardRef, useImperativeHandle } from "react";
import { playSongBySrc } from "../service/saveData";
import ReactPlayer from "react-player";
import "./Player.css";

const Player = forwardRef(({ src, songInfo, playerRef, handleNextSong, handlePreSong }) => {
  // Docs: https://github.com/CookPete/react-player/blob/master/src/demo/App.js
  const [player, setPlayer] = useState({});
  const [played, setPlayed] = useState(0);
  // const [loaded, setLoaded] = useState(0);
  // const [pip, setPip] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [loop, setLoop] = useState(false);

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
    // setLoaded(state.loaded);
    setPlayed(state.played);
  };

  const handlePlay = () => {
    playSongBySrc(src);
    setPlaying(true);
  };

  const handlePause = () => {
    playSongBySrc(src, false);
    setPlaying(false);
  };

  const getSeekPercent = () => {
    const percent = played * 100;
    return {
      background: `linear-gradient(90deg, #1abc9c ${percent}%, rgba(255, 255, 255, 0.216) ${percent}%)`
    };
  };

  const nextSong = () => {
    if (handleNextSong) handleNextSong();
  };

  const preSong = () => {
    if (handlePreSong) handlePreSong();
  };

  useImperativeHandle(playerRef, () => ({
    forcePause() {
      setPlaying(false);
    }
  }));

  return (
    <div className="card acrylic">
      <div>
        {songInfo.thumbnail_url && (
          <div
            className="cover-image"
            style={{ backgroundImage: `url(${songInfo.thumbnail_url})` }}
          ></div>
        )}
        <div className="song-info">
          <div className="song-title">{songInfo.title}</div>
          <div className="song-author">{songInfo.author_name}</div>
        </div>

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

        <div className="player-actions">
          <div className="btn-player" onClick={() => preSong()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="42px"
              height="42px"
              style={{
                msTransform: "rotate(360deg)",
                WebkitTransform: "rotate(360deg)",
                transform: "rotate(360deg)"
              }}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091L6.757 12L17 4.909v14.182z"
                fill="#1B2021"
              />
            </svg>
          </div>
          {!playing && (
            <div className="btn-player" onClick={() => handlePlay()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="42px"
                height="42px"
                style={{
                  msTransform: "rotate(360deg)",
                  WebkitTransform: "rotate(360deg)",
                  transform: "rotate(360deg)"
                }}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 512 512"
              >
                <path
                  d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248s248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256z"
                  fill="#1B2021"
                />
              </svg>
            </div>
          )}
          {playing && (
            <div className="btn-player" onClick={() => handlePause()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="42px"
                height="42px"
                style={{
                  msTransform: "rotate(360deg)",
                  WebkitTransform: "rotate(360deg)",
                  transform: "rotate(360deg)"
                }}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"
                  fill="#1B2021"
                />
              </svg>
            </div>
          )}
          <div className="btn-player" onClick={() => nextSong()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="42px"
              height="42px"
              style={{
                msTransform: "rotate(360deg)",
                WebkitTransform: "rotate(360deg)",
                transform: "rotate(360deg)"
              }}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909L17.243 12L7 19.091V4.909z"
                fill="#1B2021"
              />
            </svg>
          </div>
          {loop && (
            <div className="btn-player" onClick={() => setLoop(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="24px"
                height="24px"
                style={{
                  msTransform: "rotate(360deg)",
                  WebkitTransform: "rotate(360deg)",
                  transform: "rotate(360deg)"
                }}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 7h10v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.5.5 0 0 0-.85.36V5H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7zm10 10H7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V19h11c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v3zm-4-2.75V9.81c0-.45-.36-.81-.81-.81a.74.74 0 0 0-.36.09l-1.49.74a.61.61 0 0 0-.34.55c0 .34.28.62.62.62h.88v3.25c0 .41.34.75.75.75s.75-.34.75-.75z"
                  fill="#1B2021"
                />
              </svg>
            </div>
          )}

          {!loop && (
            <div className="btn-player" onClick={() => setLoop(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="24px"
                height="24px"
                style={{
                  msTransform: "rotate(360deg)",
                  WebkitTransform: "rotate(360deg)",
                  transform: "rotate(360deg)"
                }}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 7h10v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.5.5 0 0 0-.85.36V5H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7zm10 10H7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V19h11c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v3z"
                  fill="#1B2021"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      <div style={{ display: "none" }}>
        <ReactPlayer
          ref={ref}
          // url={src}
          url={songInfo.url}
          onProgress={handleProgress}
          playing={playing}
          loop={loop}
          onEnded={nextSong}
        />
      </div>
    </div>
  );
});

export default Player;
