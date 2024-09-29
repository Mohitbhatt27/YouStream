export const YOUTUBE_GET_POPULAR_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=14&&key=" +
  import.meta.env.VITE_YOUTUBE_API_KEY;
