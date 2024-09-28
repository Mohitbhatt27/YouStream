import { Outlet } from "react-router-dom";

import Header from "./Header";

const MainContainer = () => {
  return (
    <div className="mx-1">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainContainer;
