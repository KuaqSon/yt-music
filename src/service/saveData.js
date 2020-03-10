const getPlayList = () => {
  const playlistStr = localStorage.getItem("playlist");
  return JSON.parse(playlistStr);
};

const saveToPlayList = song => {
  let playlist = getPlayList();
  if (playlist) {
    localStorage.setItem(
      "playlist",
      JSON.stringify([
        ...playlist.filter(p => p.src !== song.src),
        song
      ])
    );
  } else {
    localStorage.setItem("playlist", JSON.stringify([song]));
  }
};

const removeFromPlaylist = song => {
  const playlist = getPlayList();
  if (playlist) {
    localStorage.setItem("playlist", JSON.stringify(playlist.filter(x => x.id !== song.id)));
  }
};

const getPlayingSong = () => {
  const playlist = getPlayList();
  if (!playlist) return null;

  const song = playlist.find(x => x.playing === true);
  return song;
};

const playSong = (songId, play = true) => {
  const playlist = getPlayList();
  if (!playlist) return;

  playlist.forEach(song => {
    song.playing = song.id === songId ? play : false;
  });
  localStorage.setItem("playlist", JSON.stringify(playlist));
};

const playSongBySrc = (src, play = true) => {
  const playlist = getPlayList();
  if (!playlist) return;

  playlist.forEach(song => {
    song.playing = song.src === src ? play : false;
  });

  localStorage.setItem("playlist", JSON.stringify(playlist));
};

export { saveToPlayList, removeFromPlaylist, getPlayList, playSong, getPlayingSong, playSongBySrc };
