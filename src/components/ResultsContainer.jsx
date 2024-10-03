import SideBar from "./SideBar";
import MiniButtons from "./MiniButtons";
import { useLocation } from "react-router-dom";

const ResultsContainer = () => {
  const location = useLocation();
  const { title } = location.state || {};
  console.log(title);
  return (
    <div>
      <div className="flex">
        <div className="p-4 m-4">
          <SideBar />
        </div>
        <div>
          <div className="flex p-4 m-4 h-16 justify-center cursor-pointer ">
            <MiniButtons />
          </div>
          <div className="flex p-4 my-4">
            <div className="flex">
              <div className="m-4 p-4">Image</div>
              <div className="m-2 p-2 flex flex-col">
                <h3>name</h3>
                <span>46K views . 2 months ago </span>

                <div className="flex">
                  <img className="mr-4" src="" alt="Image" />
                  <div>channel Name</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsContainer;
