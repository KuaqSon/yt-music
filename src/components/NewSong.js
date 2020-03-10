import React, { useState } from "react";
import { getAudioInfo } from "../service/audio";
import { saveToPlayList } from "../service/saveData";
import Loading from "./Loading";

export default function NewSong({ addSongCallback }) {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddSong = (queueOnly = false) => {
    if (!videoUrl) return;

    if (videoUrl.indexOf("youtube") < 0 && videoUrl.indexOf("youtu.be") < 0) {
      setError("Not a youtube link!");
      return;
    }

    const isMobile = videoUrl.indexOf("youtu.be") > -1 && videoUrl.indexOf("youtube") < 0;

    let video_id = videoUrl.split(isMobile ? ".be/" : "v=")[1] || "";

    if (!video_id) {
      setError("Invalid link!");
      return;
    }

    const ampersandPosition = video_id.indexOf("&");
    if (ampersandPosition !== -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }

    setError("");
    setLoading(true);

    getAudioInfo(video_id)
      .then(info => {
        setLoading(false);
        if (addSongCallback && !queueOnly) addSongCallback({ src: info.url, info });

        saveToPlayList({
          id: new Date().getTime(),
          src: info.url,
          thumbnail_url: info.thumbnail_url,
          author_name: info.author_name,
          title: info.title,
          playing: !queueOnly
        });
      })
      .catch(e => {
        console.log("\nLog ->\n: handleAddSong -> e", e);
        setError("Something went wrong please try again later.");
        setLoading(false);
      });

    // const promises = [
    //   new Promise(resolve => resolve(getAudioSource(video_id))),
    //   new Promise(resolve => resolve(getAudioInfo(video_id)))
    // ];
    // Promise.all(promises)
    //   .then(data => {
    //     setLoading(false);
    //     const info = data[1];
    //     if (addSongCallback && !queueOnly) addSongCallback({ src: data[0], info });

    //     saveToPlayList({
    //       id: new Date().getTime(),
    //       src: data[0],
    //       thumbnail_url: info.thumbnail_url,
    //       author_name: info.author_name,
    //       title: info.title,
    //       playing: true,
    //       url: info.url
    //     });

    //     return data;
    //   })
    //   .catch(e => {
    //     setError("Something went wrong please try again later.");
    //     setLoading(false);
    //   });
  };

  return (
    <div className="card acrylic">
      {loading && <Loading />}
      <label>Input a youtube link:</label>
      <div className="d-flex">
        <input
          type="text"
          onChange={e => setVideoUrl(e.target.value)}
          value={videoUrl}
          className="text_input w-100"
          placeholder="Eg: https://www.youtube.com/watch?v=aaaaaaaa"
        />
      </div>
      {error && <div className="error_text">{error}</div>}

      <button onClick={() => handleAddSong()} className="btn mt-3">
        Play Now
      </button>

      <button onClick={() => handleAddSong(true)} className="btn mt-3">
        Add To Queue
      </button>
    </div>
  );
}
