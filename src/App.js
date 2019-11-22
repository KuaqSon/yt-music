import React, { useState, useEffect } from "react";
import "./App.css";

function parse_str(str) {
  return str.split("&").reduce(function(params, param) {
    const paramSplit = param.split("=").map(function(value) {
      return decodeURIComponent(value.replace("+", " "));
    });
    params[paramSplit[0]] = paramSplit[1];
    return params;
  }, {});
}

function App() {
  const [audioSrc, setAudioSrc] = useState("");

  useEffect(() => {
    const fetchData = vid => {
      fetch(
        "https://" +
          vid +
          "-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https%3A%2F%2Fwww.youtube.com%2Fget_video_info%3Fvideo_id%3D" +
          vid
      ).then(response => {
        console.log("response", response);
        let audio_streams = {};
        if (response.ok) {
          response.text().then(data => {
            const parseData = parse_str(data),
              streams = (
                parseData.url_encoded_fmt_stream_map +
                "," +
                parseData.adaptive_fmts
              ).split(",");

            streams.forEach(function(s, n) {
              const stream = parse_str(s),
                itag = stream.itag * 1;
              let quality = false;
              console.log(stream);
              switch (itag) {
                case 139:
                  quality = "48kbps";
                  break;
                case 140:
                  quality = "128kbps";
                  break;
                case 141:
                  quality = "256kbps";
                  break;
              }
              if (quality) audio_streams[quality] = stream.url;
            });

            console.log("audio_streams", audio_streams);

            setAudioSrc(audio_streams["128kbps"]);
          });
        }
      });
    };

    fetchData("dr2lsCSYG2A");
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
