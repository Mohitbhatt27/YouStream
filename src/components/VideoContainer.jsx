import { useEffect, useState } from "react";
import { YOUTUBE_GET_POPULAR_VIDEOS } from "../utils/constants";
import axios from "axios";
import { timeAgo } from "../utils/timeConversion";
import { formatViews } from "../utils/viewsConversion";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [popularVideos, setPopularVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const response = await axios.get(YOUTUBE_GET_POPULAR_VIDEOS);
    setPopularVideos(response.data.items);
  };
  return (
    <div className="flex flex-wrap justify-center">
      {popularVideos.map((popularVideo) => (
        <Link to={"/watch?v=" + popularVideo.id} key={popularVideo.id}>
          <div className="cursor-pointer w-96 rounded-xl m-4 hover:shadow-xl">
            <div className="border w-96 h-72 rounded-xl">
              <img
                src={popularVideo?.snippet?.thumbnails?.standard?.url}
                alt="thumbnail"
                className="rounded-lg"
              />
            </div>
            <div className="text-xl font-semibold pt-1 flex flex-wrap two-line-ellipsis">
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
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
