import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import NewSong from "./components/NewSong";
import Player from "./components/Player";
import PlayList from "./components/PlayList";
import { getPlayList, getPlayingSong, playSong } from "./service/saveData";

function App() {
  const [audioSrc, setAudioSrc] = useState("");
  const [activeMenu, setActiveMenu] = useState(0);
  const [songInfo, setSongInfo] = useState({});
  const [playlist, setPlaylist] = useState([]);

  const playerRef = useRef();

  useEffect(() => {
    const playingSong = getPlayingSong();
    if (playingSong) {
      setAudioSrc(playingSong.src);
      setSongInfo({ ...playingSong });
      setActiveMenu(1);
    }

    const pl = getPlayList();
    setPlaylist(pl);
  }, []);

  const getNaviClass = key => {
    if (key === activeMenu) {
      return "tab_item active";
    } else {
      return "tab_item";
    }
  };

  const handleAddSongCallBack = data => {
    console.log("\nLog ->\n: App -> data", data);
    setAudioSrc(data.src);
    setSongInfo(data.info);
    setActiveMenu(1);
  };

  const showPlayList = () => {
    setActiveMenu(2);
    const pl = getPlayList();
    setPlaylist(pl);
  };

  const handlePlaySongFromPlaylist = song => {
    playSong(song.id);
    setAudioSrc(song.src);
    setSongInfo({ ...song });
    showPlayList();
  };

  const handlePauseSongFromPlaylist = song => {
    playSong(song.id, false);
    showPlayList();
    playerRef.current.forcePause();
  };

  const handlePlayNextSong = next => {
    // next=true mean playing next song, otherwise play previous song
    if (!playlist || playlist.length <= 1) return;

    const index = playlist.findIndex(s => s.src === songInfo.src);
    if (index < 0) return;

    let newIndex = index;
    if (next && index === playlist.length - 1) {
      newIndex = 0;
    } else if (!next && index === 0) {
      newIndex = playlist.length - 1;
    } else {
      newIndex = next ? index + 1 : index - 1;
    }
    const nextSong = playlist[newIndex];
    playSong(nextSong.id);
    setAudioSrc(nextSong.src);
    setSongInfo({ ...nextSong });
  };

  return (
    <div className="App">
      {songInfo.thumbnail_url && (
        <div
          className="app-background"
          style={{ backgroundImage: `url(${songInfo.thumbnail_url})` }}
        ></div>
      )}
      <div className="wrapper">
        <nav className="tabs">
          <div className="selector" style={{ width: "112px", left: `${activeMenu * 112}px` }}></div>
          <a href="#" className={getNaviClass(0)} onClick={() => setActiveMenu(0)}>
            New
          </a>
          <a href="#" className={getNaviClass(1)} onClick={() => setActiveMenu(1)}>
            Player
          </a>
          <a href="#" className={getNaviClass(2)} onClick={() => showPlayList()}>
            PlayList
          </a>
        </nav>
      </div>

      <div className="tabs_cont">
        <div className={activeMenu === 0 ? "tabs_item" : "tabs_item d-none"}>
          <NewSong addSongCallback={data => handleAddSongCallBack(data)} />
        </div>
        <div className={activeMenu === 1 ? "tabs_item" : "tabs_item d-none"}>
          <Player
            handleNextSong={() => handlePlayNextSong(true)}
            handlePreSong={() => handlePlayNextSong(false)}
            playerRef={playerRef}
            src={audioSrc}
            songInfo={songInfo}
          />
        </div>
        <div className={activeMenu === 2 ? "tabs_item" : "tabs_item d-none"}>
          <PlayList
            handlePlaySongFromPlaylist={handlePlaySongFromPlaylist}
            handlePauseSongFromPlaylist={handlePauseSongFromPlaylist}
            playlist={playlist}
          />
        </div>
      </div>

      <footer>Made by Quang Son with ❤</footer>
    </div>
  );
}

export default App;
