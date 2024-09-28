import { useSearchParams } from "react-router-dom";
import SideBar from "./SideBar";

const NowPlaying = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const url = `https://www.youtube.com/embed/${id}?si=ZqzBBVe7mARofJz_&autoPlay=1`;
  return (
    <div className="flex">
      <div className="p-4 m-4">
        <SideBar />
      </div>
      <div>
        <div className="flex p-4 my-4">
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
      </div>
    </div>
  );
};

export default NowPlaying;
