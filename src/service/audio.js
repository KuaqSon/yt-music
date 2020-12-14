function parse_str(str) {
  return str.split("&").reduce(function (params, param) {
    const paramSplit = param.split("=").map(function (value) {
      return decodeURIComponent(value.replace("+", " "));
    });
    params[paramSplit[0]] = paramSplit[1];
    return params;
  }, {});
}

const getAudioSource = async (vid) => {
  return await fetch(
    "https://cors-anywhere.herokuapp.com/" +
      "https://www.youtube.com/get_video_info?video_id=" +
      vid
  ).then((response) => {
    if (response.ok) {
      return response.text().then((data) => {
        const ytData = parse_str(data);
        const getAdaptiveFormats = JSON.parse(ytData.player_response)
          .streamingData.adaptiveFormats;
        const findAudioInfo = getAdaptiveFormats.findIndex(
          (obj) => obj.audioQuality
        );

        return getAdaptiveFormats[findAudioInfo].url;
      });
    }
  });
};

const getAudioInfo = async (vid) => {
  const url = `https://noembed.com/embed?format=json&url=https://www.youtube.com/watch?v=${vid}`;

  return await fetch(url).then((response) => {
    return response.text().then((data) => {
      return JSON.parse(data);
    });
  });
};

const getVidFromYoutubeUrl = (url) => {
  const video_id = url.split("v=")[1];
  const ampersandPosition = video_id.indexOf("&");
  if (ampersandPosition !== -1) {
    return video_id.substring(0, ampersandPosition);
  }

  return "";
};

export { getAudioSource, getAudioInfo, getVidFromYoutubeUrl };
