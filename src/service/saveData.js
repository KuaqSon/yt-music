const saveToPlayList = song => {
  const playlistStr = localStorage.getItem("playlist");

  if (playlist) {
    const playlist = JSON.parse(playlistStr);
    localStorage.setItem("playlist", JSON.stringify([...playlist, song]));
  } else {
    localStorage.setItem("playlist", JSON.stringify([song]));
  }
};

const removeFromPlaylist = song => {
  const playlistStr = localStorage.getItem("playlist");

  if (playlist) {
    const playlist = JSON.parse(playlistStr);
    localStorage.setItem(
      "playlist",
      JSON.stringify(playlist.filter(x => x.src !== song.src))
    );
  }
};

export { saveToPlayList, removeFromPlaylist };
