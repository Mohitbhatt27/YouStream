const APIKeys = import.meta.env.VITE_YOUTUBE_API_KEYS.split(",");
let currentAPIKeyIndex = 0;
export const getCurrentAPIKey = () => {
  return APIKeys[currentAPIKeyIndex];
};
export const switchAPIkey = () => {
  console.log(
    "Quota exceeded. Switching API key...",
    APIKeys.indexOf(getCurrentAPIKey())
  );
  currentAPIKeyIndex = (currentAPIKeyIndex + 1) % APIKeys.length;
};

export const YOUTUBE_GET_POPULAR_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=";

export const YOUTUBE_SEARCH_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=14&key=";

export const FETCH_CHANNEL_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=";
