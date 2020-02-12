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
        ...playlist.filter(p => p.src !== song.src).map(s => ({ ...s, playing: false })),
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

const playSong = songId => {
  const playlist = getPlayList();
  if (!playlist) return;

  const song = playlist.find(x => x.id === songId);
  if (!song) return;

  const rest = playlist.filter(x => x.id !== songId).map(s => ({ ...s, playing: false }));
  localStorage.setItem("playlist", JSON.stringify([...rest, { ...song, playing: true }]));
};

export { saveToPlayList, removeFromPlaylist, getPlayList, playSong };
