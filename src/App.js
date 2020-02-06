import React, { useState, useEffect } from "react";
import { getAudioSource, getAudioInfo } from "./service/audio";
import "./App.css";

function App() {
  const [audioSrc, setAudioSrc] = useState("");

  useEffect(() => {
    getAudioSource("9ue1DivJxes").then(src => {
      console.log("TCL: App -> src", src);
      setAudioSrc(src);
    });
    getAudioInfo("9ue1DivJxes").then(info => {
      console.log("TCL: App -> info", info);
    });
  }, []);

  return (
    <div className="App">
      <audio
        id="youtube"
        autoPlay={true}
        controls={true}
        loop={true}
        src={audioSrc}
      ></audio>
    </div>
  );
}

export default App;
