import { useCallback, useEffect, useState } from "react";
import {
  getCurrentAPIKey,
  switchAPIkey,
  YOUTUBE_GET_POPULAR_VIDEOS,
} from "../utils/constants";
import axios from "axios";
import { timeAgo } from "../utils/timeConversion";
import { formatViews } from "../utils/viewsConversion";
import { useNavigate } from "react-router-dom";

const VideoContainer = () => {
  const [popularVideos, setPopularVideos] = useState([]);
  const navigate = useNavigate();

  const fetchVideos = useCallback(async () => {
    try {
      const response = await axios.get(
        `${YOUTUBE_GET_POPULAR_VIDEOS}${getCurrentAPIKey()}`
      );
      setPopularVideos(response.data.items);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        switchAPIkey();
        return fetchVideos();
      }
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const handleOnClickEachVideo = (videoDetails) => {
    navigate("/watch?v=" + videoDetails.id, { state: { videoDetails } });
  };

  return (
    <div className="flex flex-wrap justify-center">
      {popularVideos &&
        popularVideos.map((popularVideo) => (
          <div
            className="cursor-pointer w-96 rounded-xl m-4 hover:shadow-xl"
            key={popularVideo.id}
            onClick={() => handleOnClickEachVideo(popularVideo)}
          >
            <div className="border w-96 h-72 rounded-xl">
              <img
                src={popularVideo?.snippet?.thumbnails?.standard?.url}
                alt="thumbnail"
                className="rounded-lg"
              />
            </div>
            <div className="text-xl font-semibold pt-1 flex">
              {popularVideo?.snippet?.localized?.title}
            </div>
            <div className="text-lg pt-1">
              {popularVideo?.snippet?.channelTitle}
            </div>
            <div className="flex space-x-3">
              <div>
                {formatViews(popularVideo?.statistics?.viewCount)} views
              </div>
              <div>{timeAgo(popularVideo?.snippet?.publishedAt)}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default VideoContainer;
