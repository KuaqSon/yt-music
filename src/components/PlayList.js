import React from "react";
import { removeFromPlaylist } from "../service/saveData";
import "./Player.css";

export default function PlayList({
  playlist,
  handlePlaySongFromPlaylist,
  handlePauseSongFromPlaylist,
  loadPlayList
}) {
  const handlePause = song => {
    if (handlePauseSongFromPlaylist) handlePauseSongFromPlaylist(song);
  };

  const handlePlay = song => {
    if (handlePlaySongFromPlaylist) handlePlaySongFromPlaylist(song);
  };

  const handleRemove = song => {
    removeFromPlaylist(song);
    if (loadPlayList) loadPlayList();
  };

  return (
    <div className="card acrylic">
      <div className="playlist">
        {(!playlist || playlist.length === 0) && <div>No songs found.</div>}
        {playlist &&
          playlist.map((s, index) => (
            <div className="pl-item" key={index}>
              {!s.playing && (
                <div className="btn-player" onClick={() => handlePlay(s)}>
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
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248s248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256z"
                      fill="#1B2021"
                    />
                  </svg>
                </div>
              )}
              {s.playing && (
                <div className="btn-player" onClick={() => handlePause(s)}>
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
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"
                      fill="#1B2021"
                    />
                  </svg>
                </div>
              )}
              <div className="pl-title">
                {s.title}
              </div>
              <div className="btn-player" onClick={() => handleRemove(s)}>
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
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"
                    fill="#f44336"
                  />
                </svg>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
