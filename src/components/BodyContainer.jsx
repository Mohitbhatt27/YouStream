import MiniButtons from "./MiniButtons";
import SideBar from "./SideBar";

const BodyContainer = () => {
  return (
    <div className="flex">
      <div className="p-4 m-4">
        <SideBar/>
      </div>
      <div className="flex p-4 m-4 h-16">
        <MiniButtons />
      </div>
    </div>
  );
};

export default BodyContainer;
