import React, { useState, useEffect } from "react";
import "./App.css";
import NewSong from "./components/NewSong";
import Player from "./components/Player";
import PlayList from "./components/PlayList";
import {getPlayList} from "./service/saveData";

function App() {
  const [audioSrc, setAudioSrc] = useState("");
  const [activeMenu, setActiveMenu] = useState(0);
  const [songInfo, setSongInfo] = useState({});
  const [playlist, setPlaylist] = useState([]);

  // useEffect(() => {
  //   getAudioSource("9ue1DivJxes").then(src => {
  //     console.log("TCL: App -> src", src);
  //     setAudioSrc(src);
  //   });
  //   getAudioInfo("9ue1DivJxes").then(info => {
  //     console.log("TCL: App -> info", info);
  //   });
  // }, []);

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
    console.log("\nLog ->\n: showPlayList -> playlist", pl)
    setPlaylist(pl)
  }

  return (
    <div className="App">
      {songInfo.thumbnail_url && <div
        className="app-background"
        style={{ backgroundImage: `url(${songInfo.thumbnail_url})`}}
      ></div>}
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
          <Player src={audioSrc} songInfo={songInfo} />
        </div>
        <div className={activeMenu === 2 ? "tabs_item" : "tabs_item d-none"}>
          < PlayList playlist={playlist} />
        </div>
      </div>

      <footer>Made by Quang Son with ❤</footer>
    </div>
  );
}

export default App;
