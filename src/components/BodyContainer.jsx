import MiniButtons from "./MiniButtons";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";

const BodyContainer = () => {
  return (
    <div className="flex">
      <div className="p-4 m-4">
        <SideBar />
      </div>
      <div>
        <div className="flex p-4 m-4 h-16 justify-center">
          <MiniButtons />
        </div>
        <div className="flex p-4 my-4">
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default BodyContainer;
