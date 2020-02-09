import React, { useState, useEffect } from "react";
import { getAudioSource, getAudioInfo } from "./service/audio";
import "./App.css";
import NewSong from "./components/NewSong";
import Player from "./components/Player";

function App() {
  const [audioSrc, setAudioSrc] = useState("");
  const [activeMenu, setActiveMenu] = useState(0);

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
    console.log("\nLog ->\n: App -> data", data)
    setAudioSrc(data.src);
    setActiveMenu(1);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <nav className="tabs">
          <div className="selector" style={{ width: "112px", left: `${activeMenu * 112}px` }}></div>
          <a href="#" className={getNaviClass(0)} onClick={() => setActiveMenu(0)}>
            New
          </a>
          <a href="#" className={getNaviClass(1)} onClick={() => setActiveMenu(1)}>
            Player
          </a>
          <a href="#" className={getNaviClass(2)} onClick={() => setActiveMenu(2)}>
            PlayList
          </a>
        </nav>
      </div>

      <div className="tabs_cont">
        <div className={activeMenu === 0 ? "tabs_item" : "tabs_item d-none"}>
          <NewSong addSongCallback={data => handleAddSongCallBack(data)} />
        </div>
        <div className={activeMenu === 1 ? "tabs_item" : "tabs_item d-none"}>
          <Player src={audioSrc} name="song" />
        </div>
        <div className={activeMenu === 2 ? "tabs_item" : "tabs_item d-none"}>
          <div className="card acrylic">
            <h3>PlayList</h3>
            <label>Comming soon...</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
