import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import share from "../assets/share.svg";
import { formatViews } from "../utils/viewsConversion";
import axios from "axios";
import {
  FETCH_CHANNEL_BY_ID,
  getCurrentAPIKey,
  switchAPIkey,
} from "../utils/constants";
import { useCallback, useEffect, useState } from "react";

const NowPlaying = () => {
  const location = useLocation();
  const { videoDetails } = location.state || {};

  const [channelDetail, setChannelDetail] = useState({
    subscribers: "",
    channelImg: "",
  });

  const channelDetails = useCallback(async () => {
    try {
      const channel = await axios.get(
        `${FETCH_CHANNEL_BY_ID}${getCurrentAPIKey()}&id=${
          videoDetails?.snippet.channelId
        }`
      );
      const subscribers = channel?.data?.items[0]?.statistics?.subscriberCount;
      const channelImg =
        channel?.data?.items[0]?.snippet?.thumbnails?.default?.url;
      setChannelDetail({
        subscribers: subscribers,
        channelImg: channelImg,
      });
    } catch (error) {
      if (error.response && error.response.status === 403) {
        console.log("Quota exceeded. Switching API key...");
        switchAPIkey();
        channelDetails();
      }
    }
  }, [videoDetails?.snippet.channelId]);

  useEffect(() => {
    channelDetails();
  }, [channelDetails]);

  const id = videoDetails?.id;

  const url = `https://www.youtube.com/embed/${id}?si=ZqzBBVe7mARofJz_&autoPlay=1`;
  return (
    <div className="flex ">
      <div className="p-4 m-4">
        <SideBar />
      </div>
      <div className="flex flex-col">
        <div className="flex px-2 my-2">
          <iframe
            width="960"
            height="540"
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            className="rounded-lg"
          ></iframe>
        </div>
        <div className="px-2 mt-2 font-medium text-[25px] font-sans text-[#0f0f0f]  two-line-ellipsis max-w-[63rem] ">
          {videoDetails?.snippet?.title}
        </div>
        <div className="px-2 mt-2 font-medium text-[25px] font-sans text-[#0f0f0f] flex">
          <img
            className="w-16 cursor-pointer"
            src={channelDetail.channelImg ? channelDetail.channelImg : ""}
            alt="channel-icon"
          />
          <div className="flex flex-col ml-4 mr-16 items-start justify-center">
            <p className="text-xl font-medium cursor-pointer">
              {videoDetails?.snippet?.channelTitle}
            </p>
            <p className="text-sm font-medium">
              {channelDetail.subscribers
                ? formatViews(channelDetail.subscribers)
                : ""}{" "}
              subscribers
            </p>
          </div>

          <div className=" flex w-[43rem] justify-between">
            <button className="text-2xl cursor-pointer px-8 rounded-3xl text-white bg-black">
              Subscribe
            </button>

            <div className="cursor-pointer px-8 rounded-3xl text-gray-900 bg-gray-200 flex justify-center items-center">
              <div className="flex items-center justify-center">
                <button
                  onClick={() => console.log("liked")}
                  className="hover:shadow-xl hover:bg-gray-400 rounded-xl w-8"
                >
                  <img className="" src={like} alt="like-button" />
                </button>
                <div className="text-xl">
                  {formatViews(videoDetails?.statistics?.likeCount)}
                </div>
              </div>
              <button
                onClick={() => console.log("disliked")}
                className="hover:shadow-2xl hover:bg-gray-400 rounded-xl w-8 ml-8"
              >
                <img className=" " src={dislike} alt="dislike-button" />
              </button>
            </div>
            <div className="cursor-pointer px-8 rounded-3xl text-gray-900 bg-gray-200 flex justify-center items-center">
              <div className="flex items-center justify-center">
                <button
                  onClick={() => console.log("shared")}
                  className="hover:shadow-xl hover:bg-gray-400 rounded-xl w-8"
                >
                  <img className="" src={share} alt="share-button" />
                </button>
                <div className="text-xl">Share</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
